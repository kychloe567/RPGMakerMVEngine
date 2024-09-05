// The window for displaying party member status on the menu screen.
function Window_MenuStatus() {
    this.initialize.apply(this, arguments);
}


Window_MenuStatus.prototype = Object.create(Window_Selectable.prototype);
