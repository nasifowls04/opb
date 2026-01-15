# Card Migration Guide

## Overview
When you replace or update a card by changing its rank or properties, the migration system automatically moves users from the old card version to the new one.

## How It Works
The migration system identifies cards by their **base name and progression number**, ignoring the rank:
- `alvida_c_01` and `alvida_e_01` are treated as the same card (base: "alvida", progression: "01")
- `alvida_a_02` and `alvida_b_02` are treated as the same card (base: "alvida", progression: "02")
- The system automatically uses whichever version is currently in `cards.js`

## Card ID Format
Cards follow this pattern: `{baseName}_{rank}_{progression}`

Examples:
- `luffy_e_01` - Monkey D. Luffy, E rank, progression 01
- `luffy_c_02` - Monkey D. Luffy, C rank, progression 02
- `alvida_e_01` - Alvida, E rank, progression 01

## Migration Process
1. **Make your card change** - Update or replace a card in `cards.js`
2. **Run the migration script**:
   ```bash
   node scripts/migrate_replaced_cards.js
   ```
3. **What happens**:
   - Users with the old card ID are detected
   - They're automatically migrated to the new card ID
   - If a user has both old and new versions, they're merged (counts and XP added, highest level kept)
   - The old card ID is removed from their collection

## Example Scenarios

### Scenario 1: Simple Replacement
You have `alvida_c_01` and create `alvida_e_01`:
- Users with `alvida_c_01` → automatically get `alvida_e_01` instead
- Their stats (level, XP, count) are preserved

### Scenario 2: Rank Change in Evolution Chain
You have `alvida_a_02` (an evolution) and decide to change it to `alvida_b_02`:
- Users with `alvida_a_02` → automatically get `alvida_b_02` instead
- Works for any rank change, not just the base card

### Scenario 3: User Has Both Versions
If a user somehow has both the old and new card:
- Counts are added together
- XP amounts are added together
- Highest level is kept
- Old card ID is removed

## Notes
- Only run this after updating `cards.js` with the new card
- The script is safe to run multiple times (idempotent)
- Users keep all their card stats (levels, counts, XP)
