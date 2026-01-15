// Programmatic registry of special conditions and metadata
// Export canonical names and helper utilities so card creators
// can import available options or reference them in code.

export const baseConditions = {
  Silence: { id: 'Silence', category: 'Control', description: 'Target cannot use Special Attacks for X turns. Normal attacks still work.' },
  Disarm: { id: 'Disarm', category: 'Control', description: "Target's Power is reduced by 30% for X turns. Does not affect Special Attacks." },
  Slow: { id: 'Slow', category: 'Control', description: 'Reduces Speed by 40% for X turns.' },
  Root: { id: 'Root', category: 'Control', description: 'Target cannot switch targets or be moved for X turns.' },

  Bleed: { id: 'Bleed', category: 'Damage', description: "Deals 1/12 of target's HP per turn. Damage increases by +5% each turn. Ends after X turns." },
  Cripple: { id: 'Cripple', category: 'Damage', description: "Target loses 5% max HP permanently per application (capped)." },
  Corrosion: { id: 'Corrosion', category: 'Damage', description: "Reduces target's defense/damage reduction by 20% for X turns." },

  Expose: { id: 'Expose', category: 'Risk', description: 'Target takes +40% damage until next time it is hit.' },
  Overheat: { id: 'Overheat', category: 'Risk', description: '+30% Power, takes 1/10 HP at end of each turn.' },
  Recoil: { id: 'Recoil', category: 'Risk', description: 'When the target attacks, it takes 15% of the damage dealt as self-damage.' },

  Barrier: { id: 'Barrier', category: 'Utility', description: 'Absorbs the next X instances of damage. Barrier HP scales with user HP.' },
  Fortify: { id: 'Fortify', category: 'Utility', description: 'Reduces all incoming damage by 25% for X turns.' },
  Cleanse: { id: 'Cleanse', category: 'Utility', description: 'Removes all negative Special Conditions and grants 1 turn of immunity.' },

  Confusion: { id: 'Confusion', category: 'Chaos', description: '40% chance the target misses, hits a random target, or hits itself.' },
  Curse: { id: 'Curse', category: 'Chaos', description: 'All healing received is reversed into damage for X turns.' },
  FateMark: { id: 'FateMark', category: 'Chaos', description: 'After X turns target takes massive fixed damage unless cleansed.' },
};

// Generate variant name strings
export function evoName(base) {
  return `EVO${base}`;
}

export function fName(base) {
  return `F${base}`;
}

export function fevoName(base) {
  return `FEVO${base}`;
}

// Return a flat list of canonical strings (base + standard variants)
export function allConditionNames() {
  const bases = Object.keys(baseConditions);
  const list = [];
  for (const b of bases) {
    list.push(b);
    list.push(evoName(b));
    list.push(fName(b));
    list.push(fevoName(b));
  }
  return list;
}

export default { baseConditions, evoName, fName, fevoName, allConditionNames };
