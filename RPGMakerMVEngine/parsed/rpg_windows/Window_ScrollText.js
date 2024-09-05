// is handled as a window for convenience.
function Window_ScrollText() {
    this.initialize.apply(this, arguments);
}


Window_ScrollText.prototype = Object.create(Window_Base.prototype);
