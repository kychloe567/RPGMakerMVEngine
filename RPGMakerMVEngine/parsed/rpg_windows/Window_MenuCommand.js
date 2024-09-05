// The window for selecting a command on the menu screen.
function Window_MenuCommand() {
    this.initialize.apply(this, arguments);
}


Window_MenuCommand.prototype = Object.create(Window_Command.prototype);

Window_MenuCommand._lastCommandSymbol = null;

Window_MenuCommand.initCommandPosition = function() {
    this._lastCommandSymbol = null;
};
