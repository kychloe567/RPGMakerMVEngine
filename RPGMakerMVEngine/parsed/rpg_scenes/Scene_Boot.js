// The scene class for initializing the entire game.
function Scene_Boot() {
    this.initialize.apply(this, arguments);
}


Scene_Boot.prototype = Object.create(Scene_Base.prototype);

Scene_Boot.loadSystemImages = function() {
    ImageManager.reserveSystem('IconSet');
    ImageManager.reserveSystem('Balloon');
    ImageManager.reserveSystem('Shadow1');
    ImageManager.reserveSystem('Shadow2');
    ImageManager.reserveSystem('Damage');
    ImageManager.reserveSystem('States');
    ImageManager.reserveSystem('Weapons1');
    ImageManager.reserveSystem('Weapons2');
    ImageManager.reserveSystem('Weapons3');
    ImageManager.reserveSystem('ButtonSet');
};
