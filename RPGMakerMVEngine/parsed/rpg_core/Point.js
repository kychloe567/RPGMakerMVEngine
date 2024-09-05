/**
 * The point class.
 *
 * @class Point
 * @constructor
 * @param {Number} x The x coordinate
 * @param {Number} y The y coordinate
 */
function Point() {
    this.initialize.apply(this, arguments);
}


Point.prototype = Object.create(PIXI.Point.prototype);
