// The sprite class with a feature which displays animations.
function Sprite_Base() {
    this.initialize.apply(this, arguments);
}


Sprite_Base.prototype = Object.create(Sprite.prototype);
