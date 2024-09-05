// The window for selecting a target enemy on the battle screen.
function Window_BattleEnemy() {
    this.initialize.apply(this, arguments);
}


Window_BattleEnemy.prototype = Object.create(Window_Selectable.prototype);
