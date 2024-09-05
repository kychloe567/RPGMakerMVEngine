// included.
function Game_Party() {
    this.initialize.apply(this, arguments);
}


Game_Party.prototype = Object.create(Game_Unit.prototype);

Game_Party.ABILITY_ENCOUNTER_HALF    = 0;

Game_Party.ABILITY_ENCOUNTER_NONE    = 1;

Game_Party.ABILITY_CANCEL_SURPRISE   = 2;

Game_Party.ABILITY_RAISE_PREEMPTIVE  = 3;

Game_Party.ABILITY_GOLD_DOUBLE       = 4;

Game_Party.ABILITY_DROP_ITEM_DOUBLE  = 5;
