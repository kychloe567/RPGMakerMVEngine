// The scene class of the save screen.
function Scene_Save() {
    this.initialize.apply(this, arguments);
}


Scene_Save.prototype = Object.create(Scene_File.prototype);
