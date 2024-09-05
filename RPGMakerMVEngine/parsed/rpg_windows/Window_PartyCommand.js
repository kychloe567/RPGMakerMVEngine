// The window for selecting whether to fight or escape on the battle screen.
function Window_PartyCommand() {
    this.initialize.apply(this, arguments);
}


Window_PartyCommand.prototype = Object.create(Window_Command.prototype);
