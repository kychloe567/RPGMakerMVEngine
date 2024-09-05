// The game object class for an enemy.
function Game_Enemy() {
    this.initialize.apply(this, arguments);
}


Game_Enemy.prototype = Object.create(Game_Battler.prototype);
