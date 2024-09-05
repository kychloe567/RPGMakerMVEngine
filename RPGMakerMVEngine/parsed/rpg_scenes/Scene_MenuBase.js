// The superclass of all the menu-type scenes.
function Scene_MenuBase() {
    this.initialize.apply(this, arguments);
}


Scene_MenuBase.prototype = Object.create(Scene_Base.prototype);
