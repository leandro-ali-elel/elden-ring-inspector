export const ITEMS: Item[] = [
  {
    key: 'armorAlbinauricMask',
    icon: 'armor_albinauric_mask.png',
    type: 'armors',
  },
  {
    key: 'armorAstrologerSet',
    icon: 'armor_astrologer_set.png',
    type: 'armors',
  },
  {
    key: 'armorBlackKnifeHood',
    icon: 'armor_black_knife_hood.png',
    type: 'armors',
  },
  {
    key: 'armorCrucibleKnightSet',
    icon: 'armor_crucible_knight_set.png',
    type: 'armors',
  },
  {
    key: 'armorEldenLordSet',
    icon: 'armor_elden_lord_set.png',
    type: 'armors',
  },
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
    key: 'shieldOneEyedShield',
    icon: 'shield_one_eyed_shield.png',
    type: 'shields',
  },
  {
    key: 'shieldTwinbirdKiteShield',
    icon: 'shield_twinbird_kite_shield.png',
    type: 'shields',
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
    key: 'talismanMarikasScarseal',
    icon: 'talisman_marikas_scarseal.png',
    type: 'talismans',
  },
  {
    key: 'talismanMoonOfNokstella',
    icon: 'talisman_moon_of_nokstella.png',
    type: 'talismans',
  },
  {
    key: 'talismanRoarMedallion',
    icon: 'talisman_roar_medallion.png',
    type: 'talismans',
  },
  {
    key: 'upgradeAncientDragonSmithingStone',
    icon: 'upgrade_ancient_dragon_smithing_stone.png',
    type: 'upgrades',
  },
  {
    key: 'weaponBoltOfGransax',
    icon: 'weapon_bolt_of_gransax.png',
    type: 'weapons',
  },
  {
    key: 'weaponBlackKnife',
    icon: 'weapon_black_knife.png',
    type: 'weapons',
  },
  {
    key: 'weaponCinquedea',
    icon: 'weapon_cinquedea.png',
    type: 'weapons',
  },
  {
    key: 'weaponDeathsPoker',
    icon: 'weapon_deaths_poker.png',
    type: 'weapons',
  },
  {
    key: 'weaponGoldenEpitaph',
    icon: 'weapon_golden_epitaph.png',
    type: 'weapons',
  },
  {
    key: 'weaponGravelStoneSeal',
    icon: 'weapon_gravel_stone_seal.png',
    type: 'weapons',
  },
  {
    key: 'weaponRuinsGreatsword',
    icon: 'weapon_ruins_greatsword.png',
    type: 'weapons',
  },
  {
    key: 'weaponSacredRelicSword',
    icon: 'weapon_sacred_relic_sword.png',
    type: 'weapons',
  },
  {
    key: 'weaponSwordOfNightAndFlame',
    icon: 'weapon_sword_of_night_and_flame.png',
    type: 'weapons',
  },
];

export interface Item {
  key: string;
  type: ItemType;
  icon?: string;
}
export type ItemType =
  | 'armors'
  | 'ashes'
  | 'consumables'
  | 'greatRunes'
  | 'keys'
  | 'maps'
  | 'remembrances'
  | 'shields'
  | 'talismans'
  | 'upgrades'
  | 'weapons';
