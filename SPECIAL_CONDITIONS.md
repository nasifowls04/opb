# Special Conditions Reference

This file lists canonical special-condition names (base + variants) and descriptions so you can copy the exact string into a card's `specialCondition` field.

Naming convention
- Base: `Name` (e.g. `Stun`, `Poison`)
- EVO variant: prefix with `EVO` (longer/stronger effect) → `EVOName` (e.g. `EVOstun`)
- Full-team variant: prefix with `F` → `FName` (applies to entire opposing team)
- Full + EVO: `FEVOName` (team-wide EVO effect)

Usage
- Put the exact string into `card.specialAttack.specialCondition` (case-sensitive as listed below).


## Control & Tempo Effects

- `Silence`
  - Target cannot use Special Attacks for X turns. Normal attacks still work.

- `EVOsilence`
  - Stronger/longer `Silence`.

- `FSilence`
  - `Silence` applied to the entire opposing team.

-  `FESilence` / `FEVOsilence`
  - Team-wide EVO Silence.

- `Disarm`
  - Target's Power is reduced by 30% for X turns. Does not affect Special Attacks.

- `EVODisarm`
  - Longer/stronger `Disarm`.

- `Slow`
  - Reduces Speed by 40% for X turns. May cause the target to act last.

- `EVOSlow`
  - Longer/stronger `Slow`.

- `Root`
  - Target cannot switch targets or be moved for X turns.


## Damage & Pressure Effects

- `Bleed`
  - Deals 1/12 of target's HP per turn. Damage increases by +5% each turn. Ends after X turns.

- `EVOBleed`
  - Longer/stronger `Bleed` ramp.

- `Cripple`
  - Target loses 5% max HP permanently per application (capped). Does not expire.

- `Corrosion`
  - Reduces target's defense/damage reduction by 20% for X turns. Increases damage taken from all sources.


## Risk / High-Skill Effects

- `Expose`
  - Target takes +40% damage. Effect ends after the target is hit once.

- `Overheat`
  - Target gains +30% Power but takes 1/10 HP at end of each turn.

- `Recoil`
  - Whenever the target attacks, it takes 15% of the damage dealt as self-damage.


## Defensive & Utility Effects

- `Barrier`
  - Absorbs the next X instances of damage. Barrier HP scales with the user's Health.

- `Fortify`
  - Reduces all incoming damage by 25% for X turns.

- `Cleanse`
  - Removes all negative Special Conditions and grants 1 turn of immunity.


## Chaos / Fun Effects

- `Confusion`
  - 40% chance the target: misses, hits a random target, or hits itself.

- `Curse`
  - All healing received is reversed into damage for X turns.

- `FateMark`
  - After X turns target takes massive fixed damage. Can be cleansed before it triggers.


## F / EVO Variants

For any base effect `Name` you can create:
- `EVOName` (stronger/longer)
- `FName` (applies to the entire opposing team)
- `FEVOName` (team-wide EVO effect)

Examples:
- `Stun`, `EVOstun`, `Fstun`, `FEVOstun`


## Quick copy list (exact strings)

Silence
EVOsilence
FSilence
FEVOsilence
Disarm
EVODisarm
Slow
EVOSlow
Root
Bleed
EVOBleed
Cripple
Corrosion
Expose
Overheat
Recoil
Barrier
Fortify
Cleanse
Confusion
Curse
FateMark

And use `F`/`EVO`/`FEVO` prefixes as needed.
