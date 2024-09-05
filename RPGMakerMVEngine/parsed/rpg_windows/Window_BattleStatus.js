// The window for displaying the status of party members on the battle screen.
function Window_BattleStatus() {
    this.initialize.apply(this, arguments);
}


Window_BattleStatus.prototype = Object.create(Window_Selectable.prototype);
