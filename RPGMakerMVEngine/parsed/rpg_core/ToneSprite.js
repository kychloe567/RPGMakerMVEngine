/**
 * The sprite which changes the screen color in 2D canvas mode.
 *
 * @class ToneSprite
 * @constructor
 */
function ToneSprite() {
    this.initialize.apply(this, arguments);
}


ToneSprite.prototype = Object.create(PIXI.Container.prototype);
