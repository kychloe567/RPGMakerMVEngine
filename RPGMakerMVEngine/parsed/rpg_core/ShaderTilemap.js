/**
 * The tilemap which displays 2D tile-based game map using shaders
 *
 * @class Tilemap
 * @constructor
 */
function ShaderTilemap() {
    Tilemap.apply(this, arguments);
    this.roundPixels = true;
}


ShaderTilemap.prototype = Object.create(Tilemap.prototype);
