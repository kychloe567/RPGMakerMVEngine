// The window for selecting a skill to use on the battle screen.
function Window_BattleSkill() {
    this.initialize.apply(this, arguments);
}


Window_BattleSkill.prototype = Object.create(Window_SkillList.prototype);
