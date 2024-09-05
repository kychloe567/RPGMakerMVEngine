// The window for selecting buy/sell on the shop screen.
function Window_ShopCommand() {
    this.initialize.apply(this, arguments);
}


Window_ShopCommand.prototype = Object.create(Window_HorzCommand.prototype);
