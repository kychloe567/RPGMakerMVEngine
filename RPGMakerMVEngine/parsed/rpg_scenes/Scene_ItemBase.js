// The superclass of Scene_Item and Scene_Skill.
function Scene_ItemBase() {
    this.initialize.apply(this, arguments);
}


Scene_ItemBase.prototype = Object.create(Scene_MenuBase.prototype);
