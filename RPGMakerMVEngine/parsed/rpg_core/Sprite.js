/**
 * The basic object that is rendered to the game screen.
 *
 * @class Sprite
 * @constructor
 * @param {Bitmap} bitmap The image for the sprite
 */
function Sprite() {
    this.initialize.apply(this, arguments);
}


Sprite.prototype = Object.create(PIXI.Sprite.prototype);

Sprite.voidFilter = new PIXI.filters.VoidFilter();
// Number of the created objects.
Sprite._counter = 0;
