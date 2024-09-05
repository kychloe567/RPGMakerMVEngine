// The window for selecting a save file on the save and load screens.
function Window_SavefileList() {
    this.initialize.apply(this, arguments);
}


Window_SavefileList.prototype = Object.create(Window_Selectable.prototype);
