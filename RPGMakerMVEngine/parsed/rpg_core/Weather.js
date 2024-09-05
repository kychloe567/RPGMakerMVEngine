/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class Weather
 * @constructor
 */
function Weather() {
    this.initialize.apply(this, arguments);
}


Weather.prototype = Object.create(PIXI.Container.prototype);
