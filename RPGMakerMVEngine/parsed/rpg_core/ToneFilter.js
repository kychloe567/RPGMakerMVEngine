/**
 * The color matrix filter for WebGL.
 *
 * @class ToneFilter
 * @extends PIXI.Filter
 * @constructor
 */
function ToneFilter() {
    PIXI.filters.ColorMatrixFilter.call(this);
}


ToneFilter.prototype = Object.create(PIXI.filters.ColorMatrixFilter.prototype);
