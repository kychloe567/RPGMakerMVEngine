// The game object class for a battle action.
function Game_Action() {
    this.initialize.apply(this, arguments);
}


Game_Action.EFFECT_RECOVER_HP       = 11;

Game_Action.EFFECT_RECOVER_MP       = 12;

Game_Action.EFFECT_GAIN_TP          = 13;

Game_Action.EFFECT_ADD_STATE        = 21;

Game_Action.EFFECT_REMOVE_STATE     = 22;

Game_Action.EFFECT_ADD_BUFF         = 31;

Game_Action.EFFECT_ADD_DEBUFF       = 32;

Game_Action.EFFECT_REMOVE_BUFF      = 33;

Game_Action.EFFECT_REMOVE_DEBUFF    = 34;

Game_Action.EFFECT_SPECIAL          = 41;

Game_Action.EFFECT_GROW             = 42;

Game_Action.EFFECT_LEARN_SKILL      = 43;

Game_Action.EFFECT_COMMON_EVENT     = 44;

Game_Action.SPECIAL_EFFECT_ESCAPE   = 0;

Game_Action.HITTYPE_CERTAIN         = 0;

Game_Action.HITTYPE_PHYSICAL        = 1;

Game_Action.HITTYPE_MAGICAL         = 2;
