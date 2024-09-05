// The scene class of the load screen.
function Scene_Load() {
    this.initialize.apply(this, arguments);
}


Scene_Load.prototype = Object.create(Scene_File.prototype);
