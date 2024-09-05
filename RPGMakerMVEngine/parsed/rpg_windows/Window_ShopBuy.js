// The window for selecting an item to buy on the shop screen.
function Window_ShopBuy() {
    this.initialize.apply(this, arguments);
}


Window_ShopBuy.prototype = Object.create(Window_Selectable.prototype);
