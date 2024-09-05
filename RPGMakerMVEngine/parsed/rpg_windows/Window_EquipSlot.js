// The window for selecting an equipment slot on the equipment screen.
function Window_EquipSlot() {
    this.initialize.apply(this, arguments);
}


Window_EquipSlot.prototype = Object.create(Window_Selectable.prototype);
