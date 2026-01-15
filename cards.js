// cards.js
// Centralized card and rank definitions

import { extraCards } from "./cards.extra.js";

export const RANKS = {
  E: { name: "E", color: 0xd59267, icon: "https://files.catbox.moe/gcxdld.png", value: 1 },
  D: { name: "D", color: 0xc76a63, icon: "https://files.catbox.moe/g2k0qe.png", value: 2 },
  C: { name: "C", color: 0xb0bdc1, icon: "https://files.catbox.moe/hwe2sp.png", value: 3 },
  B: { name: "B", color: 0xb3bbea, icon: "https://files.catbox.moe/bazsnm.png", value: 4 },
  A: { name: "A", color: 0xeeba2b, icon: "https://files.catbox.moe/nuhsyl.png", value: 5 },
  S: { name: "S", color: 0x8965cf, icon: "https://files.catbox.moe/5o59c4.png", value: 6 },
  SS: { name: "SS", color: 0x1322aa, icon: "https://files.catbox.moe/hu1nq2.png", value: 7 },
  UR: { name: "UR", color: 0xef3a5d, icon: "https://files.catbox.moe/07p0m2.png", value: 8 },
  LR: { name: "LR", color: 0xff7df2, icon: "https://files.catbox.moe/vaiaws.png", value: 9 },
  Z: { name: "Z", color: 0x5bb780, icon: "https://files.catbox.moe/xkdiie.png", value: 10 }, // special event rank
};

export const cards = [
  // LUFFY PROGRESSION - Chronological (Kid -> Dawn Island -> b Captain -> a Worst Gen -> s Emperor -> ur Warrior)
  // ...existing card objects...
  {
    id: "luffy_e_01",
    name: "Monkey D. Luffy",
    title: "Kid luffy",
    rank: "E",
    race: "Human",
    power: 5,
    health: 5,
    speed: 5,
    attackRange: [1, 2],
    type: "Attack",
    ability: null,
    image: "https://files.catbox.moe/kihgbn.jpg",
    evolutions: ["luffy_c_02"],
  },
  {
    id: "luffy_c_02",
    name: "Monkey D. Luffy",
    title: "Dawn Island",
    rank: "C",
    race: "Human",
    power: 75,
    health: 75,
    speed: 100,
    attackRange: [15, 20],
    type: "Attack",
    specialAttack: { 
      name: "Gum Gum pistol", 
      range: [25, 40], 
      gif: "https://files.catbox.moe/r7l4gt.gif",
      specialCondition: "Stun"
    },
    ability: null,
    image: "https://files.catbox.moe/530q7y.jpg",
    evolutions: ["luffy_b_03"],
    isUpgrade: true,
    upgradeRequirements: { cost: 1800, minLevel: 15 },
  },
  {
    id: "luffy_b_03",
    name: "Monkey D. Luffy",
    title: "Captain of the Strawhat pirates",
    rank: "B",
    race: "Human",
    power: 140,
    health: 130,
    speed: 175,
    attackRange: [25, 30],
    type: "Attack",
    specialAttack: { 
      name: "Gear Second", 
      range: [50, 80], 
      gif: "https://files.catbox.moe/s3xyhm.gif",
      specialCondition: "Stun"
    },
    ability: null,
    image: "https://files.catbox.moe/wqrrqt.webp",
    evolutions: ["luffy_a_04"],
    isUpgrade: true,
    upgradeRequirements: { cost: 3200, minLevel: 20 },
  },
  {
    id: "luffy_a_04",
    name: "Monkey D. Luffy",
    title: "Worst generation pirate",
    rank: "A",
    race: "Human",
    power: 215,
    health: 175,
    speed: 300,
    type: "Attack",
    specialAttack: { 
      name: "Gear Second", 
      range: [110, 160], 
      gif: "https://files.catbox.moe/s3xyhm.gif",
      specialCondition: "Stun"
    },
    ability: null,
    image: "https://files.catbox.moe/spyqxh.webp",
    evolutions: ["luffy_s_05"],
    isUpgrade: true,
    upgradeRequirements: { cost: 7500, minLevel: 35 },
  },
  {
    id: "luffy_s_05",
    name: "Monkey D. Luffy",
    title: "Emperor of the new generation",
    rank: "S",
    race: "Human",
    power: 300,
    health: 250,
    speed: 400,
    attackRange: [55, 60],
    type: "Attack",
    specialAttack: { 
      name: "Gear Fourth: Snakeman", 
      range: [180, 240], 
      gif: "https://files.catbox.moe/ud9v4t.gif",
      specialCondition: null
    },
    ability: null,
    image: "https://files.catbox.moe/rt1ueq.jpg",
    haki: ["advancedobservation","armament","advancedconqueror"],
    evolutions: ["luffy_ur_06"],
    isUpgrade: true,
    upgradeRequirements: { cost: 50000, minLevel: 75 },
  },
  {
    id: "luffy_ur_06",
    name: "Monkey D. Luffy",
    title: "The Warrior of liberation",
    rank: "UR",
    race: "Human",
    power: 625,
    health: 500,
    speed: 750,
    attackRange: [100, 120],
    type: "Attack",
    specialAttack: { 
      name: "Gomu Gomu no Bajrang Gun", 
      range: [300, 380], 
      gif: "https://files.catbox.moe/toppyn.gif",
      specialCondition: "FEVOstun"
    },
    ability: null,
    image: "https://files.catbox.moe/ppdc69.jpg",
    haki: ["advancedobservation","advancedarmament","advancedconqueror"],
    evolutions: [],
    isUpgrade: true,
    upgradeRequirements: { cost: 150000, minLevel: 100 },
  },
    // Straw Hat weapon (craftable from blueprint)
    {
      id: "Strawhat_b_01",
      name: "Strawhat",
      title: "Monkey D. Luffy's weapon",
      rank: "A",
      type: "weapon",
      pullable: true,
      boost: { atk: 10, spd: 0, hp: 0 },
      signatureCards: ["luffy_c_01","luffy_b_02","luffy_b_03","luffy_a_04","luffy_s_05","luffy_ur_06","GolDRoger_ss_01","GolDRoger_ss_02","GolDRoger_ur_03","Shanks_c_01","Shank_a_02","Shanks_ss_03","Shanks_ur_04"],
      mainCard: "luffy_ur_06",
      image: "https://files.catbox.moe/placeholder.webp",
      craftingRequirements: {
        materials: {
          "Leather": 8,
          "Brass": 2
        },
        cost: 2500
      },
      evolutions: ["Strawhat_blueprint_s_01"],
    },
];

// Normalize base card stats so power, attack ranges, health and upgrade minLevel
// are rounded to the nearest 5 (special-case: 2 -> 1). This ensures stored
// card definitions follow the same rounding rules used at runtime.
import { roundNearestFive } from "./lib/stats.js";

// Merge optional extra cards maintained in `cards.extra.js` so they are
// included in normalization below.
try {
  if (Array.isArray(extraCards) && extraCards.length) {
    cards.push(...extraCards);
  }
} catch (e) {
  console.warn('Failed to merge extraCards:', e && e.message ? e.message : e);
}

for (const c of cards) {
  if (!c || typeof c !== 'object') continue;
  if (Array.isArray(c.attackRange)) {
    try { c._originalAttackRange = [Number(c.attackRange[0] || 0), Number(c.attackRange[1] || 0)]; } catch (e) { c._originalAttackRange = null; }
  }

  if (typeof c.power === 'number') c.power = roundNearestFive(c.power);

  if (Array.isArray(c.attackRange)) {
    c.attackRange[0] = roundNearestFive(Number(c.attackRange[0] || 0));
    c.attackRange[1] = roundNearestFive(Number(c.attackRange[1] || 0));
  }

  if (typeof c.health === 'number') c.health = roundNearestFive(c.health);
  if (c.upgradeRequirements && typeof c.upgradeRequirements.minLevel === 'number') {
    const ml = c.upgradeRequirements.minLevel;
    c.upgradeRequirements.minLevel = (ml === 2) ? 1 : roundNearestFive(ml);
  }
}

// Validate for duplicate card ids (fatal at startup)
(() => {
  const seen = new Map();
  const dupes = new Set();
  for (const c of cards) {
    if (!c || !c.id) continue;
    const id = String(c.id);
    if (seen.has(id)) dupes.add(id);
    else seen.set(id, true);
  }
  if (dupes.size > 0) {
    const list = Array.from(dupes).join(', ');
    console.error('Duplicate card id(s) detected on startup:', list);
    throw new Error('Duplicate card id(s) detected: ' + list);
  }
})();

// Optionally revert attackRange to original unrounded values at runtime by
// setting environment variable RESTORE_UNROUNDED_ATTACKS=true. This instructs
// the loader to restore `attackRange` from the preserved `_originalAttackRange`.
  if (process.env.RESTORE_UNROUNDED_ATTACKS === 'true') {
  for (const c of cards) {
    if (c && Array.isArray(c._originalAttackRange) && c._originalAttackRange.length === 2) {
      c.attackRange = [Number(c._originalAttackRange[0]), Number(c._originalAttackRange[1])];
    }
  }
}

/**
 * Extract base name and progression from card ID
 * Base = text before first underscore
 * Progression = text after last underscore
 * Rank (middle part) is ignored
 * 
 * Examples:
 * - "alvida_c_01" → { base: "alvida", progression: "01" }
 * - "Alvida_C_01" → { base: "alvida", progression: "01" }
 * - "alvida_ss_01" → { base: "alvida", progression: "01" }
 * - "alvida_a_02" → { base: "alvida", progression: "02" }
 */
function parseCardId(id) {
  const parts = id.split('_');
  if (parts.length < 3) return null;
  
  const base = parts[0].toLowerCase();
  const progression = parts[parts.length - 1];
  
  return { base, progression };
}

export function getCardById(id) {
  // First try exact match (case-insensitive)
  let card = cards.find((c) => c.id.toLowerCase() === id.toLowerCase());
  if (card) return card;

  // If not found, try to match by base name and progression number
  const parsed = parseCardId(id);
  if (parsed) {
    card = cards.find((c) => {
      const cParsed = parseCardId(c.id);
      return cParsed && cParsed.base === parsed.base && cParsed.progression === parsed.progression;
    });
    if (card) {
      console.log(`[Card Lookup] Found ${id} → ${card.id} (matched by base+progression)`);
      return card;
    }
  }

  return null;
}

// Post-process support cards to assign varied boosts (deterministic)
// This avoids editing thousands of entries manually while providing
// appropriate boost types and values per rank and card stage.
(() => {
  function hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }

  function getRangeForRank(rank, mode) {
    switch ((rank || '').toUpperCase()) {
      case 'C':
        if (mode === 'single') return [1,10];
        if (mode === 'both') return [1,8];
        return null;
      case 'B':
        if (mode === 'single') return [1,15];
        if (mode === 'both') return [1,12];
        return null;
      case 'A':
        if (mode === 'single') return [1,20];
        if (mode === 'both') return [1,15];
        if (mode === 'special') return [1,5];
        return null;
      case 'S':
        if (mode === 'single') return [1,30];
        if (mode === 'both') return [1,20];
        if (mode === 'special') return [1,8];
        return null;
      case 'SS':
        if (mode === 'single') return [1,40];
        if (mode === 'both') return [1,25];
        if (mode === 'special') return [1,10];
        return null;
      case 'UR':
        if (mode === 'single') return [1,50];
        if (mode === 'special') return [1,15];
        return null;
      default:
        return null;
    }
  }

  // compute max stage map (reuse same logic as boosts computation)
  const maxStageMap = (() => {
    const map = new Map();
    for (const c of cards) {
      if (!c.id) continue;
      const m = c.id.match(/_(\d{2})$/) || c.id.match(/_(\d+)$/);
      const stage = m ? parseInt(m[1], 10) : 1;
      const base = c.id.replace(/_(?:\d{2}|\d+)$/, '');
      const cur = map.get(base) || 0;
      if (stage > cur) map.set(base, stage);
    }
    return map;
  })();

  function computeStageValue(rank, mode, id) {
    const range = getRangeForRank(rank, mode);
    if (!range) return 0;
    const [min, max] = range;
    const m = (id || '').match(/_(\d{2})$/) || (id || '').match(/_(\d+)$/);
    const stage = m ? parseInt(m[1], 10) : 1;
    const base = (id || '').replace(/_(?:\d{2}|\d+)$/, '');
    const maxStage = maxStageMap.get(base) || 1;
    let val;
    if (maxStage <= 1) val = Math.round((min + max) / 2);
    else {
      const computed = Math.round(min + (max - min) * (stage / maxStage));
      val = Math.min(max, computed + 1);
    }
    return val;
  }

  function keywordPreferredMode(name, title) {
    const text = ((name || '') + ' ' + (title || '')).toLowerCase();
    if (/cook|chef|kitchen|cook of|cookbook|cookery/.test(text)) return 'hp';
    if (/doctor|medic|surgeon|nurse|healer|doctor of|physician/.test(text)) return 'hp';
    if (/captain|commander|admiral|lieutenant|officer|pirate captain|captain of|leader/.test(text)) return 'atk';
    if (/singer|diva|song|music|mind|mind manipulation|mind control|manipulation|performer|dancer/.test(text)) return 'special';
    if (/cook|chef/.test(text)) return 'hp';
    return null;
  }

  for (const c of cards) {
    if (!c || !c.type) continue;
    if (String(c.type).toLowerCase() !== 'support') continue;

    // determine desired mode options per rank
    const rank = (c.rank || 'C').toUpperCase();
    const options = [];
    if (rank === 'C') { options.push('hp','atk'); }
    else if (rank === 'B') { options.push('hp','atk','both'); }
    else if (rank === 'A') { options.push('hp','atk','both','special'); }
    else if (rank === 'S') { options.push('hp','atk','both','special'); }
    else if (rank === 'SS') { options.push('hp','atk','both','special'); }
    else if (rank === 'UR') { options.push('hp','atk','special'); }
    else { options.push('hp'); }

    // prefer keyword-driven mode when applicable
    const preferred = keywordPreferredMode(c.name, c.title);
    let mode = null;
    if (preferred && options.includes(preferred)) mode = preferred;

    // deterministic fallback using id hash
    if (!mode) {
      const h = hashStr(c.id || (c.name || ''));
      mode = options[h % options.length];
    }

    // compute value using stage-aware formula
    let val = computeStageValue(rank, mode === 'both' ? 'both' : (mode === 'special' ? 'special' : 'single'), c.id);
    if (!val || val <= 0) val = computeStageValue(rank, 'single', c.id) || 1;

    // apply to card.boost and ability text
    c.boost = c.boost || {};
    if (mode === 'hp') { c.boost.hp = val; c.ability = `Boosts team HP by ${val}%`; }
    else if (mode === 'atk') { c.boost.atk = val; c.ability = `Boosts team ATK by ${val}%`; }
    else if (mode === 'both') { c.boost.atk = val; c.boost.hp = val; c.ability = `Boosts team ATK and HP by ${val}%`; }
    else if (mode === 'special') { c.boost.special = val; c.ability = `Boosts team Special attack by ${val}%`; }
  }
})();

// Probability-driven random card selection
// probabilities is an object with rank keys -> percentage (summing to 100)
export function getRandomCardByProbability(probabilities = { E: 36.075, D: 30, C: 15, B: 10, A: 5, S: 3, SS: 1, UR: 0.2, LR: 0.05 }) {
  const entries = Object.entries(probabilities);
  const rnd = Math.random() * 100;
  let acc = 0;
  let chosenRank = null;
  for (const [rank, pct] of entries) {
    acc += pct;
    if (rnd <= acc) {
      chosenRank = rank;
      break;
    }
  }
  if (!chosenRank || chosenRank === "ITEM") chosenRank = "C";
  // Build allowed base-card set: prefer the lowest-rank (base) variant for each card name
  const allowedBaseIds = new Set();
  const byName = {};
  for (const c of cards) {
    const name = (c.name || "").toLowerCase();
    byName[name] = byName[name] || [];
    byName[name].push(c);
  }
  for (const name of Object.keys(byName)) {
    const group = byName[name].slice().sort((a,b) => (getRankInfo(a.rank)?.value||0) - (getRankInfo(b.rank)?.value||0));
    if (group.length) allowedBaseIds.add(group[0].id);
  }

  // exclude upgraded versions from pulls; prefer base variants even if isUpgrade flag is missing
  const pool = cards.filter((c) => allowedBaseIds.has(c.id) && c.rank && c.rank.toUpperCase() === String(chosenRank).toUpperCase() && c.pullable !== false && c.attackRange);
  if (pool.length > 0) return pool[Math.floor(Math.random() * pool.length)];
  // fallback should also exclude upgrade variants so evolved cards are never pullable
  const fallback = cards.filter((c) => !c.isUpgrade && c.rank && c.rank.toUpperCase() !== "ITEM" && c.pullable !== false && c.attackRange);
  if (fallback.length > 0) return fallback[Math.floor(Math.random() * fallback.length)];
  const nonUpgrade = cards.filter((c) => !c.isUpgrade && c.pullable !== false && c.attackRange);
  return nonUpgrade.length > 0 ? nonUpgrade[Math.floor(Math.random() * nonUpgrade.length)] : cards[Math.floor(Math.random() * cards.length)];
}

export function getRankInfo(rank) {
  return RANKS[String(rank).toUpperCase()] || null;
}
