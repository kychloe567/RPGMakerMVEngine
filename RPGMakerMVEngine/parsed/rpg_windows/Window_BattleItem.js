// The window for selecting an item to use on the battle screen.
function Window_BattleItem() {
    this.initialize.apply(this, arguments);
}


Window_BattleItem.prototype = Object.create(Window_ItemList.prototype);
