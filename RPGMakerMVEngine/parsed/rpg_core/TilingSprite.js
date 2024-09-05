/**
 * The sprite object for a tiling image.
 *
 * @class TilingSprite
 * @constructor
 * @param {Bitmap} bitmap The image for the tiling sprite
 */
function TilingSprite() {
    this.initialize.apply(this, arguments);
}


TilingSprite.prototype = Object.create(PIXI.extras.PictureTilingSprite.prototype);
