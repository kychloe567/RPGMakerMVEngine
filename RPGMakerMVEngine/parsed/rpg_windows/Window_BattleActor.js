// The window for selecting a target actor on the battle screen.
function Window_BattleActor() {
    this.initialize.apply(this, arguments);
}


Window_BattleActor.prototype = Object.create(Window_BattleStatus.prototype);
