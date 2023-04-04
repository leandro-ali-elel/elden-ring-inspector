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
    key: 'greatRuneGodrick',
    icon: 'great_rune_godrick.png',
    type: 'greatRunes',
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
    key: 'keyMemoryStone',
    icon: 'key_memory_stone.png',
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
  {
    key: 'remembranceAstelNaturalBorn',
    icon: 'remembrance_of_the_natural_born.png',
    type: 'remembrances',
  },
  {
    key: 'remembranceDragonLord',
    icon: 'remembrance_of_the_dragon_lord.png',
    type: 'remembrances',
  },
  {
    key: 'talismanBlueDancerCharm',
    icon: 'talisman_blue_dancer_charm.png',
    type: 'talismans',
  },
  {
    key: 'talismanGodfreyIcon',
    icon: 'talisman_godfrey_icon.png',
    type: 'talismans',
  },
  {
    key: 'talismanMoonOfNokstella',
    icon: 'talisman_moon_of_nokstella.png',
    type: 'talismans',
  },
  {
    key: 'upgradeAncientDragonSmithingStone',
    icon: 'upgrade_ancient_dragon_smithing_stone.png',
    type: 'upgrades',
  },
  {
    key: 'weaponBlackKnifeDagger',
    icon: 'weapon_black_knife_dagger.png',
    type: 'weapons',
  },
  {
    key: 'weaponCinquedea',
    icon: 'weapon_cinquedea.png',
    type: 'weapons',
  },
];

export interface Item {
  key: string;
  type: ItemType;
  icon?: string;
}
export type ItemType =
  | 'ashes'
  | 'consumables'
  | 'greatRunes'
  | 'keys'
  | 'maps'
  | 'remembrances'
  | 'talismans'
  | 'upgrades'
  | 'weapons';
