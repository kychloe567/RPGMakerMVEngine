// The window for selecting an actor's action on the battle screen.
function Window_ActorCommand() {
    this.initialize.apply(this, arguments);
}


Window_ActorCommand.prototype = Object.create(Window_Command.prototype);
