// Migration script to update user inventories after new cards are added
import fs from 'fs';
import mongoose from 'mongoose';
import Progress from './models/Progress.js';
import Inventory from './models/Inventory.js';
import WeaponInventory from './models/WeaponInventory.js';
import { cards } from './cards.js';

// Load old cards
const backup = JSON.parse(fs.readFileSync('old_cards_backup.json', 'utf8'));
const oldCards = backup.cards;

// Create map from old name to new card
const nameToNewCard = {};
for (const card of cards) {
  nameToNewCard[card.name.toLowerCase()] = card;
}

// Connect to DB (assume it's set)
await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/opb');

// Update Progress
const progresses = await Progress.find({});
for (const progress of progresses) {
  if (progress.cards && typeof progress.cards === 'object') {
    const newCardsMap = new Map();
    for (const [id, data] of Object.entries(progress.cards)) {
      const oldCard = oldCards.find(c => c.id === id);
      if (oldCard) {
        const newCard = nameToNewCard[oldCard.name.toLowerCase()];
        if (newCard) {
          newCardsMap.set(newCard.id, data);
        } else {
          // Keep old if no new
          newCardsMap.set(id, data);
        }
      } else {
        newCardsMap.set(id, data);
      }
    }
    progress.cards = newCardsMap;
    await progress.save();
  }
}

// Update Inventory
const inventories = await Inventory.find({});
for (const inventory of inventories) {
  if (inventory.cards) {
    const newCards = {};
    for (const [id, count] of Object.entries(inventory.cards)) {
      const oldCard = oldCards.find(c => c.id === id);
      if (oldCard) {
        const newCard = nameToNewCard[oldCard.name.toLowerCase()];
        if (newCard) {
          newCards[newCard.id] = (newCards[newCard.id] || 0) + count;
        } else {
          newCards[id] = count;
        }
      } else {
        newCards[id] = count;
      }
    }
    inventory.cards = newCards;
    await inventory.save();
  }
}

// Update WeaponInventory
const weaponInventories = await WeaponInventory.find({});
for (const winv of weaponInventories) {
  if (winv.weapons) {
    const newWeapons = {};
    for (const [id, data] of Object.entries(winv.weapons)) {
      const oldWeapon = oldCards.find(c => c.id === id);
      if (oldWeapon) {
        const newWeapon = nameToNewCard[oldWeapon.name.toLowerCase()];
        if (newWeapon) {
          newWeapons[newWeapon.id] = data;
        } else {
          newWeapons[id] = data;
        }
      } else {
        newWeapons[id] = data;
      }
    }
    winv.weapons = newWeapons;
    await winv.save();
  }
}

console.log('Migration completed');
process.exit(0);