// The superclass of windows for selecting a command.
function Window_Command() {
    this.initialize.apply(this, arguments);
}


Window_Command.prototype = Object.create(Window_Selectable.prototype);
