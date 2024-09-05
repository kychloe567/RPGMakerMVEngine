// The window used for the event command [Show Choices].
function Window_ChoiceList() {
    this.initialize.apply(this, arguments);
}


Window_ChoiceList.prototype = Object.create(Window_Command.prototype);
