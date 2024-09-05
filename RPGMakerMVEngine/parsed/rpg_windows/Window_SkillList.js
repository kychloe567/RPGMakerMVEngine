// The window for selecting a skill on the skill screen.
function Window_SkillList() {
    this.initialize.apply(this, arguments);
}


Window_SkillList.prototype = Object.create(Window_Selectable.prototype);
