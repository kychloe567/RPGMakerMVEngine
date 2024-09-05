// The window used for the event command [Select Item].
function Window_EventItem() {
    this.initialize.apply(this, arguments);
}


Window_EventItem.prototype = Object.create(Window_ItemList.prototype);
