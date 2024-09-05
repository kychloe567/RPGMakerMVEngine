// The game object class for a vehicle.
function Game_Vehicle() {
    this.initialize.apply(this, arguments);
}


Game_Vehicle.prototype = Object.create(Game_Character.prototype);
