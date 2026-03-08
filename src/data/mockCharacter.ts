import { Character } from '../types/game';

export const mockCharacter: Character = {
  name: 'Lyra Ombrefeu',
  className: 'Magicienne (Évocation)',
  level: 7,
  portrait:
    'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=400&q=80',
  hp: { current: 38, max: 46, temp: 5 },
  armorClass: 14,
  speed: '9 m',
  spellAttackBonus: '+7',
  spellSaveDc: 15,
  concentration: 'Aucun sort actif',
  inspiration: true,
  resources: [
    { name: 'Arcane Recovery', current: 1, max: 1 },
    { name: 'Charges baguette de projectiles magiques', current: 4, max: 7 }
  ],
  conditions: ['Vision dans le noir', 'Bénédiction (2 tours)'],
  actions: [
    {
      id: 'a1',
      name: 'Aide',
      description: 'Donne l’avantage à un allié proche sur sa prochaine action utile.',
      type: 'general'
    },
    {
      id: 'a2',
      name: 'Se désengager',
      description: 'Tu ne provoques pas d’attaque d’opportunité ce tour-ci.',
      type: 'general'
    },
    {
      id: 'a3',
      name: 'Bousculer',
      description: 'Test d’Athlétisme opposé pour faire tomber ou repousser une cible.',
      type: 'general'
    }
  ],
  equippedWeapons: [
    {
      id: 'w1',
      name: 'Dague runique',
      description: 'Arme légère, peut être lancée à 6/18 m.',
      bonus: '+5',
      damage: '1d4+3 perforant',
      type: 'weapon'
    },
    {
      id: 'w2',
      name: 'Bâton de mage',
      description: 'Catalyseur arcanique, utilisable au corps-à-corps.',
      bonus: '+5',
      damage: '1d6+3 contondant',
      type: 'weapon'
    }
  ],
  spells: [
    {
      id: 's1',
      name: 'Projectile magique',
      level: 1,
      school: 'Évocation',
      concentration: false,
      castingTime: '1 action',
      range: '36 m',
      description: '3 projectiles de force qui touchent automatiquement.'
    },
    {
      id: 's2',
      name: 'Boule de feu',
      level: 3,
      school: 'Évocation',
      concentration: false,
      castingTime: '1 action',
      range: '45 m',
      description: 'Explosion de feu, 8d6 dégâts (DEX pour moitié).'
    },
    {
      id: 's3',
      name: 'Hâte',
      level: 3,
      school: 'Transmutation',
      concentration: true,
      castingTime: '1 action',
      range: '9 m',
      description: 'Double la vitesse, +2 CA, action supplémentaire limitée.'
    },
    {
      id: 's4',
      name: 'Armure de mage',
      level: 1,
      school: 'Abjuration',
      concentration: false,
      castingTime: '1 action',
      range: 'Contact',
      description: 'La CA de base devient 13 + DEX pendant 8 heures.'
    }
  ],
  inventory: [
    { id: 'i1', name: 'Potion de soin', type: 'consumable', quantity: 3, details: 'Rend 2d4+2 PV' },
    { id: 'i2', name: 'Composantes arcanes', type: 'equipment', quantity: 1, details: 'Sacoche de composants' },
    { id: 'i3', name: 'Corde en soie', type: 'equipment', quantity: 1, details: '15 mètres' },
    { id: 'i4', name: 'Pierre de feu alchimique', type: 'other', quantity: 2, details: 'Lumière rouge 1h' }
  ],
  favorites: [
    { id: 'f1', label: 'Boule de feu', category: 'spell', refId: 's2' },
    { id: 'f2', label: 'Potion de soin', category: 'item', refId: 'i1' },
    { id: 'f3', label: 'Aide', category: 'action', refId: 'a1' },
    { id: 'f4', label: 'Dague runique', category: 'weapon', refId: 'w1' }
  ],
  spellSlots: [
    { level: 1, current: 4, max: 4 },
    { level: 2, current: 2, max: 3 },
    { level: 3, current: 2, max: 3 },
    { level: 4, current: 1, max: 1 }
  ],
  gold: 175
};
