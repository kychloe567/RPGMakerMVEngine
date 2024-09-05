// The sprite for displaying an enemy.
function Sprite_Enemy() {
    this.initialize.apply(this, arguments);
}


Sprite_Enemy.prototype = Object.create(Sprite_Battler.prototype);
