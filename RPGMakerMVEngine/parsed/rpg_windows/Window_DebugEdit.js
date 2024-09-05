// The window for displaying switches and variables on the debug screen.
function Window_DebugEdit() {
    this.initialize.apply(this, arguments);
}


Window_DebugEdit.prototype = Object.create(Window_Selectable.prototype);
