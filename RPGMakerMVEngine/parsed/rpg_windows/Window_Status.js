// The window for displaying full status on the status screen.
function Window_Status() {
    this.initialize.apply(this, arguments);
}


Window_Status.prototype = Object.create(Window_Selectable.prototype);
