// The superclass of Game_Battler. It mainly contains parameters calculation.
function Game_BattlerBase() {
    this.initialize.apply(this, arguments);
}


Game_BattlerBase.TRAIT_ELEMENT_RATE   = 11;

Game_BattlerBase.TRAIT_DEBUFF_RATE    = 12;

Game_BattlerBase.TRAIT_STATE_RATE     = 13;

Game_BattlerBase.TRAIT_STATE_RESIST   = 14;

Game_BattlerBase.TRAIT_PARAM          = 21;

Game_BattlerBase.TRAIT_XPARAM         = 22;

Game_BattlerBase.TRAIT_SPARAM         = 23;

Game_BattlerBase.TRAIT_ATTACK_ELEMENT = 31;

Game_BattlerBase.TRAIT_ATTACK_STATE   = 32;

Game_BattlerBase.TRAIT_ATTACK_SPEED   = 33;

Game_BattlerBase.TRAIT_ATTACK_TIMES   = 34;

Game_BattlerBase.TRAIT_STYPE_ADD      = 41;

Game_BattlerBase.TRAIT_STYPE_SEAL     = 42;

Game_BattlerBase.TRAIT_SKILL_ADD      = 43;

Game_BattlerBase.TRAIT_SKILL_SEAL     = 44;

Game_BattlerBase.TRAIT_EQUIP_WTYPE    = 51;

Game_BattlerBase.TRAIT_EQUIP_ATYPE    = 52;

Game_BattlerBase.TRAIT_EQUIP_LOCK     = 53;

Game_BattlerBase.TRAIT_EQUIP_SEAL     = 54;

Game_BattlerBase.TRAIT_SLOT_TYPE      = 55;

Game_BattlerBase.TRAIT_ACTION_PLUS    = 61;

Game_BattlerBase.TRAIT_SPECIAL_FLAG   = 62;

Game_BattlerBase.TRAIT_COLLAPSE_TYPE  = 63;

Game_BattlerBase.TRAIT_PARTY_ABILITY  = 64;

Game_BattlerBase.FLAG_ID_AUTO_BATTLE  = 0;

Game_BattlerBase.FLAG_ID_GUARD        = 1;

Game_BattlerBase.FLAG_ID_SUBSTITUTE   = 2;

Game_BattlerBase.FLAG_ID_PRESERVE_TP  = 3;

Game_BattlerBase.ICON_BUFF_START      = 32;

Game_BattlerBase.ICON_DEBUFF_START    = 48;
