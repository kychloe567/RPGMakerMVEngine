// The window for selecting a target actor on the item and skill screens.
function Window_MenuActor() {
    this.initialize.apply(this, arguments);
}


Window_MenuActor.prototype = Object.create(Window_MenuStatus.prototype);
