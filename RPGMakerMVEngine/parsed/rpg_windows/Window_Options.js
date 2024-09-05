// The window for changing various settings on the options screen.
function Window_Options() {
    this.initialize.apply(this, arguments);
}


Window_Options.prototype = Object.create(Window_Command.prototype);
