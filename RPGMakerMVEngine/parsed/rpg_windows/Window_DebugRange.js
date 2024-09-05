// The window for selecting a block of switches/variables on the debug screen.
function Window_DebugRange() {
    this.initialize.apply(this, arguments);
}


Window_DebugRange.prototype = Object.create(Window_Selectable.prototype);

Window_DebugRange.lastTopRow = 0;

Window_DebugRange.lastIndex  = 0;
