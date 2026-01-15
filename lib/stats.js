export function roundNearestFive(n) {
  if (typeof n !== 'number' || isNaN(n)) return n;
  if (n === 2) return 1;
  return Math.round(n / 5) * 5;
}

export function roundRangeToFive(range) {
  if (!Array.isArray(range) || range.length < 2) return range;
  return [roundNearestFive(range[0] || 0), roundNearestFive(range[1] || 0)];
}

// Race perks and boosts
export const raceBoosts = {
  Human: {
    power: 0.05,
    health: 0.05,
    speed: 0.05,
  },
  "Fish-Man": {
    power: 0.15,
    health: 0.10,
    speed: -0.05,
  },
  Merfolk: {
    power: -0.10,
    health: 0.05,
    speed: 0.20,
  },
  Giant: {
    power: 0.20,
    health: 0.30,
    speed: -0.20,
  },
  Buccaneer: {
    power: 0.15,
    health: 0.25,
    damageReduction: 0.10,
  },
  Skypiean: {
    power: 0.05,
    health: 0,
    speed: 0.15,
    evasion: 0.10,
  },
  Shandian: {
    power: 0.15,
    health: 0,
    speed: 0.10,
    critChance: 0.05,
  },
  Birkan: {
    health: -0.05,
    specialAttackBoost: 0.20,
  },
  "Longarm Tribe": {
    power: 0.10,
    health: 0,
    speed: 0,
    hitChance: 0.10,
    scChance: 0.05,
  },
  "Longleg Tribe": {
    power: 0,
    health: -0.05,
    speed: 0.25,
    firstStrikeChance: 0.10,
  },
  Mink: {
    power: 0.10,
    health: 0,
    speed: 0.15,
    electroBoost: 0.20,
  },
  "Tontatta (Dwarf)": {
    power: 0,
    health: -0.20,
    speed: 0.30,
    evasion: 0.20,
  },
  Lunarian: {
    power: 0.15,
    health: 0.20,
    damageReductionWhenNotCCed: 0.15,
  },
  "Three-Eye Tribe": {
    power: 0,
    health: 0,
    speed: 0,
    specialAttackBoost: 0.15,
    accuracy: 0.10,
    ignoreBuffChance: 0.05,
  },
  Cyborg: {
    power: 0.20,
    health: 0.10,
    immuneToPoison: true,
  },
  Seraphim: {
    power: 0.15,
    health: 0.25,
    speed: -0.10,
  },
};

export function getRaceBoosts(race) {
  if (!race) return { power: 0, health: 0, speed: 0 };
  return raceBoosts[race] || { power: 0, health: 0, speed: 0 };
}

export default { roundNearestFive, roundRangeToFive, getRaceBoosts, raceBoosts };
