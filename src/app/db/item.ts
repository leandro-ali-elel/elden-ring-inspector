export const ITEMS: Item[] = [
  {
    key: 'consumableFlaskOfCrimsonTears',
    icon: 'flask_of_crimson_tears.png',
    type: 'consumables',
  },
  {
    key: 'consumableFlaskOfCeruleanTears',
    icon: 'flask_of_cerulean_tears.png',
    type: 'consumables',
  },
  {
    key: 'keyDeathroot',
    icon: 'key_deathroot.png',
    type: 'keys',
  },
  {
    key: 'keyFingerSlayerBlade',
    icon: 'key_fingerslayer_blade.png',
    type: 'keys',
  },
  {
    key: 'keyDeathroot',
    icon: 'key_deathroot.png',
    type: 'keys',
  },
  {
    key: 'mapDragonBarrow',
    icon: 'map_dragon_barrow.png',
    type: 'maps',
  },
  {
    key: 'mapLakeOfRot',
    icon: 'map_lake_of_rot.png',
    type: 'maps',
  },
  {
    key: 'mapSiofraRiver',
    icon: 'map_siofra_river.webp',
    type: 'maps',
  },
];

export interface Item {
  key: string;
  type: ItemType;
  icon?: string;
}
export type ItemType = 'maps' | 'consumables' | 'ashes' | 'keys';
