// The window for selecting an item on the item screen.
function Window_ItemList() {
    this.initialize.apply(this, arguments);
}


Window_ItemList.prototype = Object.create(Window_Selectable.prototype);
