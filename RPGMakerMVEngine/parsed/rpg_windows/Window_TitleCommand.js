// The window for selecting New Game/Continue on the title screen.
function Window_TitleCommand() {
    this.initialize.apply(this, arguments);
}


Window_TitleCommand.prototype = Object.create(Window_Command.prototype);

Window_TitleCommand._lastCommandSymbol = null;

Window_TitleCommand.initCommandPosition = function() {
    this._lastCommandSymbol = null;
};
