// Smart migration script for card replacements
// Handles cases where a card has been replaced with a new version
// (e.g., alvida_c_01 → alvida_e_01, or alvida_a_02 → alvida_b_02)
// 
// Logic: Extracts base name and progression number from card IDs
// Then matches users' old cards to new versions with the same base name and progression

import 'dotenv/config';
import mongoose from 'mongoose';
import Progress from '../models/Progress.js';
import { cards } from '../cards.js';

/**
 * Extract base name and progression number from a card ID
 * Examples:
 * - "luffy_e_01" → { base: "luffy", progression: "01" }
 * - "alvida_c_01" → { base: "alvida", progression: "01" }
 * - "alvida_a_02" → { base: "alvida", progression: "02" }
 */
function parseCardId(id) {
  // Match pattern: baseName_rank_progression (where rank is single/double letter)
  const match = id.match(/^([a-z]+)_([a-z]{1,2})_(\d+)$/i);
  if (match) {
    return { base: match[1].toLowerCase(), progression: match[3] };
  }
  return null;
}

/**
 * Build a map of base+progression → current card in cards.js
 * This helps us find what the current card ID is for any base+progression combo
 */
function buildCurrentCardMap() {
  const map = new Map(); // key: "baseName_progression", value: card object
  
  for (const card of cards) {
    const parsed = parseCardId(card.id);
    if (parsed) {
      const key = `${parsed.base}_${parsed.progression}`;
      map.set(key, card);
    }
  }
  
  return map;
}

async function migrateReplacedCards() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const currentCardMap = buildCurrentCardMap();
    console.log(`Loaded ${currentCardMap.size} current card versions\n`);

    const progressDocs = await Progress.find({});
    
    let totalMigrated = 0;
    let totalMerged = 0;

    for (const doc of progressDocs) {
      if (!doc.cards || typeof doc.cards !== 'object') continue;

      let modified = false;
      const keysToDelete = [];

      for (const [oldCardId, cardData] of Object.entries(doc.cards)) {
        const parsed = parseCardId(oldCardId);
        if (!parsed) continue;

        const key = `${parsed.base}_${parsed.progression}`;
        const currentCard = currentCardMap.get(key);

        // If the card still exists in current cards, no action needed
        if (currentCard && currentCard.id === oldCardId) {
          continue;
        }

        // If a newer version exists (different ID, same base+progression)
        if (currentCard && currentCard.id !== oldCardId) {
          const newCardId = currentCard.id;
          
          if (!doc.cards[newCardId]) {
            // User doesn't have new version, just rename
            doc.cards[newCardId] = cardData;
            keysToDelete.push(oldCardId);
            totalMigrated++;
            console.log(`✓ Migrated ${oldCardId} → ${newCardId} for user ${doc.userId}`);
          } else {
            // User has both versions, merge them
            const existingData = doc.cards[newCardId];
            const mergedData = {
              count: (existingData.count || 0) + (cardData.count || 0),
              xp: (existingData.xp || 0) + (cardData.xp || 0),
              level: Math.max(existingData.level || 0, cardData.level || 0),
              acquiredAt: Math.min(
                existingData.acquiredAt || Date.now(),
                cardData.acquiredAt || Date.now()
              ),
              ...(existingData.boost && { boost: existingData.boost })
            };
            doc.cards[newCardId] = mergedData;
            keysToDelete.push(oldCardId);
            totalMerged++;
            console.log(`✓ Merged ${oldCardId} → ${newCardId} for user ${doc.userId}`);
          }
          modified = true;
        }
      }

      // Remove old card IDs
      for (const oldId of keysToDelete) {
        delete doc.cards[oldId];
      }

      if (modified) {
        doc.markModified('cards');
        await doc.save();
      }
    }

    console.log(`\n✅ Migration complete!`);
    console.log(`   Cards migrated (no conflict): ${totalMigrated}`);
    console.log(`   Cards merged (user had both): ${totalMerged}`);
    console.log(`   Total updates: ${totalMigrated + totalMerged}`);

    await mongoose.connection.close();
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  }
}

migrateReplacedCards();
