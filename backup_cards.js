// Backup old cards
import fs from 'fs';
import { cards } from './cards.js';

const backup = {
  cards: cards,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('old_cards_backup.json', JSON.stringify(backup, null, 2));
console.log('Old cards backed up to old_cards_backup.json');