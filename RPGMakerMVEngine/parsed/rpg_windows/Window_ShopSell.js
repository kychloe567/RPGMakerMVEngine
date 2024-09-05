// The window for selecting an item to sell on the shop screen.
function Window_ShopSell() {
    this.initialize.apply(this, arguments);
}


Window_ShopSell.prototype = Object.create(Window_ItemList.prototype);
