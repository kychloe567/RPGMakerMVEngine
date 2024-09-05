// The superclass of Sprite_Actor and Sprite_Enemy.
function Sprite_Battler() {
    this.initialize.apply(this, arguments);
}


Sprite_Battler.prototype = Object.create(Sprite_Base.prototype);
