// The game object class for an actor.
function Game_Actor() {
    this.initialize.apply(this, arguments);
}


Game_Actor.prototype = Object.create(Game_Battler.prototype);
