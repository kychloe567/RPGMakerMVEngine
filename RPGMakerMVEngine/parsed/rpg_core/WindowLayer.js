/**
 * The layer which contains game windows.
 *
 * @class WindowLayer
 * @constructor
 */
function WindowLayer() {
    this.initialize.apply(this, arguments);
}


WindowLayer.prototype = Object.create(PIXI.Container.prototype);

WindowLayer.voidFilter = new PIXI.filters.VoidFilter();
