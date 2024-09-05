// The window for selecting "Go to Title" on the game end screen.
function Window_GameEnd() {
    this.initialize.apply(this, arguments);
}


Window_GameEnd.prototype = Object.create(Window_Command.prototype);
