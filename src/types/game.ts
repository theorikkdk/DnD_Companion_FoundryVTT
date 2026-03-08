export type Resource = {
  name: string;
  current: number;
  max: number;
};

export type Action = {
  id: string;
  name: string;
  description: string;
  bonus?: string;
  damage?: string;
  type: 'general' | 'weapon';
};

export type Spell = {
  id: string;
  name: string;
  level: number;
  school: string;
  concentration: boolean;
  castingTime: string;
  range: string;
  description: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  type: 'weapon' | 'equipment' | 'consumable' | 'other';
  quantity: number;
  details: string;
};

export type Favorite = {
  id: string;
  label: string;
  category: 'action' | 'spell' | 'item' | 'weapon';
  refId: string;
};

export type Character = {
  name: string;
  className: string;
  level: number;
  portrait: string;
  hp: { current: number; max: number; temp: number };
  armorClass: number;
  speed: string;
  spellAttackBonus: string;
  spellSaveDc: number;
  concentration: string;
  inspiration: boolean;
  resources: Resource[];
  conditions: string[];
  actions: Action[];
  spells: Spell[];
  inventory: InventoryItem[];
  equippedWeapons: Action[];
  favorites: Favorite[];
  spellSlots: Array<{ level: number; current: number; max: number }>;
  gold: number;
};

export type AppScreen =
  | 'login'
  | 'favorites'
  | 'character'
  | 'actions'
  | 'spells'
  | 'inventory'
  | 'dice';
