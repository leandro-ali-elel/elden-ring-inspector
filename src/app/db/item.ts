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
    key: 'mapLakeOfRot',
    icon: 'map_lake_of_rot.png',
    type: 'maps',
  },
];

export interface Item {
  key: string;
  type: 'maps' | 'consumables' | 'ashes';
  icon?: string;
}
