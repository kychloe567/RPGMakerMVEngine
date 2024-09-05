// The window used for the event command [Input Number].
function Window_NumberInput() {
    this.initialize.apply(this, arguments);
}


Window_NumberInput.prototype = Object.create(Window_Selectable.prototype);
