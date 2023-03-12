export const ASHES: Ash[] = [
  {
    key: `nobleSorcerer`,
    icon: `noble_sorcerer_ashes.png`,
    comment: `Creo que solo sirve para señalar que la gente que usaba esas cabezas de piedra refulgente, eran magos consumados, y los que no tenían éxito... pues terminaban así.`,
  },
  {
    key: `nomad`,
    icon: `nomad_ashes.png`,
    comment: `Una pena que para cuando descubrimos esta ceniza, ya conocemos el destino final de los miembros de la caravana de mercaderes a la que pertenece Kalé.`,
  },
  {
    key: `putridCorpses`,
    icon: `putrid_corpses_ashes.png`,
    comment: `Parece el nombre de una banda de brutal death metal`,
  },
  {
    key: `skeletalMilitiaman`,
    icon: `skeletal_militiaman_ashes.png`,
    // comment: `Parece el nombre de una banda de brutal death metal`,
  },
  {
    key: `wanderingNoble`,
    icon: `wandering_noble_ashes.png`,
  },
];

export interface Ash {
  key: string;
  icon: string;
  comment?: string;
}
// interface Ash {
//   [k: string]: { name: string; description: string; icon: string };
// }
