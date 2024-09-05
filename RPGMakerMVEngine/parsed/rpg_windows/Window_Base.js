// The superclass of all windows within the game.
function Window_Base() {
    this.initialize.apply(this, arguments);
}


Window_Base.prototype = Object.create(Window.prototype);

Window_Base._iconWidth  = 32;

Window_Base._iconHeight = 32;

Window_Base._faceWidth  = 144;

Window_Base._faceHeight = 144;
