// The window for selecting a command on the equipment screen.
function Window_EquipCommand() {
    this.initialize.apply(this, arguments);
}


Window_EquipCommand.prototype = Object.create(Window_HorzCommand.prototype);
