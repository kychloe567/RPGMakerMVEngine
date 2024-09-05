// The window class with cursor movement and scroll functions.
function Window_Selectable() {
    this.initialize.apply(this, arguments);
}


Window_Selectable.prototype = Object.create(Window_Base.prototype);
