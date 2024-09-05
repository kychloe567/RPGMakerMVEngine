// other than the front character, displayed in the party.
function Game_Follower() {
    this.initialize.apply(this, arguments);
}


Game_Follower.prototype = Object.create(Game_Character.prototype);
