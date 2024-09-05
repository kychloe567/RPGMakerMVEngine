/**
 * The Superclass of all scene within the game.
 * 
 * @class Scene_Base
 * @constructor 
 * @extends Stage
 */
function Scene_Base() {
    this.initialize.apply(this, arguments);
}


Scene_Base.prototype = Object.create(Stage.prototype);
