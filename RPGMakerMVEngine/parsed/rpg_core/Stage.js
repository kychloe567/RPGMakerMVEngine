/**
 * The root object of the display tree.
 *
 * @class Stage
 * @constructor
 */
function Stage() {
    this.initialize.apply(this, arguments);
}


Stage.prototype = Object.create(PIXI.Container.prototype);
