// The superclass of Scene_Save and Scene_Load.
function Scene_File() {
    this.initialize.apply(this, arguments);
}


Scene_File.prototype = Object.create(Scene_MenuBase.prototype);
