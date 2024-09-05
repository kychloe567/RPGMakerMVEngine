/**
 * The sprite which covers the entire game screen.
 *
 * @class ScreenSprite
 * @constructor
 */
function ScreenSprite() {
    this.initialize.apply(this, arguments);
}


ScreenSprite.prototype = Object.create(PIXI.Container.prototype);

ScreenSprite.YEPWarned = false;

ScreenSprite.warnYep = function () {
    if (!ScreenSprite.YEPWarned) {
        console.log("Deprecation warning. Please update YEP_CoreEngine. ScreenSprite is not a sprite, it has graphics inside.");
        ScreenSprite.YEPWarned = true;
    }
};
