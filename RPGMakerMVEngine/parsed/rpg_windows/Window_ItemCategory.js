// The window for selecting a category of items on the item and shop screens.
function Window_ItemCategory() {
    this.initialize.apply(this, arguments);
}


Window_ItemCategory.prototype = Object.create(Window_HorzCommand.prototype);
