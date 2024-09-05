/**
 * The window in the game.
 *
 * @class Window
 * @constructor
 */
function Window() {
    this.initialize.apply(this, arguments);
}


Window.prototype = Object.create(PIXI.Container.prototype);
