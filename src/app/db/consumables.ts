import { Item } from './item';

export const CONSUMABLES: Consumable[] = [
  {
    icon: 'flask_of_crimson_tears.png',
    key: 'consumableFlaskOfCrimsonTears',
    comment: '',
  },
  {
    icon: 'flask_of_cerulean_tears.png',
    key: 'consumableFlaskOfCeruleanTears',
    comment: '',
  },
];
// Qué trabajo de mierda
export interface Consumable extends Item {
  comment?: string;
}
// interface Ash {
//   [k: string]: { name: string; description: string; icon: string };
// }
