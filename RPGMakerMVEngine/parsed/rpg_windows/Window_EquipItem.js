// The window for selecting an equipment item on the equipment screen.
function Window_EquipItem() {
    this.initialize.apply(this, arguments);
}


Window_EquipItem.prototype = Object.create(Window_ItemList.prototype);
