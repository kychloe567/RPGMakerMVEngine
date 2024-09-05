// The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.
function Game_Character() {
    this.initialize.apply(this, arguments);
}


Game_Character.prototype = Object.create(Game_CharacterBase.prototype);

Game_Character.ROUTE_END               = 0;

Game_Character.ROUTE_MOVE_DOWN         = 1;

Game_Character.ROUTE_MOVE_LEFT         = 2;

Game_Character.ROUTE_MOVE_RIGHT        = 3;

Game_Character.ROUTE_MOVE_UP           = 4;

Game_Character.ROUTE_MOVE_LOWER_L      = 5;

Game_Character.ROUTE_MOVE_LOWER_R      = 6;

Game_Character.ROUTE_MOVE_UPPER_L      = 7;

Game_Character.ROUTE_MOVE_UPPER_R      = 8;

Game_Character.ROUTE_MOVE_RANDOM       = 9;

Game_Character.ROUTE_MOVE_TOWARD       = 10;

Game_Character.ROUTE_MOVE_AWAY         = 11;

Game_Character.ROUTE_MOVE_FORWARD      = 12;

Game_Character.ROUTE_MOVE_BACKWARD     = 13;

Game_Character.ROUTE_JUMP              = 14;

Game_Character.ROUTE_WAIT              = 15;

Game_Character.ROUTE_TURN_DOWN         = 16;

Game_Character.ROUTE_TURN_LEFT         = 17;

Game_Character.ROUTE_TURN_RIGHT        = 18;

Game_Character.ROUTE_TURN_UP           = 19;

Game_Character.ROUTE_TURN_90D_R        = 20;

Game_Character.ROUTE_TURN_90D_L        = 21;

Game_Character.ROUTE_TURN_180D         = 22;

Game_Character.ROUTE_TURN_90D_R_L      = 23;

Game_Character.ROUTE_TURN_RANDOM       = 24;

Game_Character.ROUTE_TURN_TOWARD       = 25;

Game_Character.ROUTE_TURN_AWAY         = 26;

Game_Character.ROUTE_SWITCH_ON         = 27;

Game_Character.ROUTE_SWITCH_OFF        = 28;

Game_Character.ROUTE_CHANGE_SPEED      = 29;

Game_Character.ROUTE_CHANGE_FREQ       = 30;

Game_Character.ROUTE_WALK_ANIME_ON     = 31;

Game_Character.ROUTE_WALK_ANIME_OFF    = 32;

Game_Character.ROUTE_STEP_ANIME_ON     = 33;

Game_Character.ROUTE_STEP_ANIME_OFF    = 34;

Game_Character.ROUTE_DIR_FIX_ON        = 35;

Game_Character.ROUTE_DIR_FIX_OFF       = 36;

Game_Character.ROUTE_THROUGH_ON        = 37;

Game_Character.ROUTE_THROUGH_OFF       = 38;

Game_Character.ROUTE_TRANSPARENT_ON    = 39;

Game_Character.ROUTE_TRANSPARENT_OFF   = 40;

Game_Character.ROUTE_CHANGE_IMAGE      = 41;

Game_Character.ROUTE_CHANGE_OPACITY    = 42;

Game_Character.ROUTE_CHANGE_BLEND_MODE = 43;

Game_Character.ROUTE_PLAY_SE           = 44;

Game_Character.ROUTE_SCRIPT            = 45;
