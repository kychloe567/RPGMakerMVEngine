// switching and running parallel process events.
function Game_Event() {
    this.initialize.apply(this, arguments);
}


Game_Event.prototype = Object.create(Game_Character.prototype);
