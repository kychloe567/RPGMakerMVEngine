// handled as a window for convenience.
function Window_BattleLog() {
    this.initialize.apply(this, arguments);
}


Window_BattleLog.prototype = Object.create(Window_Selectable.prototype);
