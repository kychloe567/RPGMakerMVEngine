// The superclass of Spriteset_Map and Spriteset_Battle.
function Spriteset_Base() {
    this.initialize.apply(this, arguments);
}


Spriteset_Base.prototype = Object.create(Sprite.prototype);
