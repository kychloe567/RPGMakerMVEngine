/**
 * The basic object that represents an image.
 *
 * @class Bitmap
 * @constructor
 * @param {Number} width The width of the bitmap
 * @param {Number} height The height of the bitmap
 */
function Bitmap() {
    this.initialize.apply(this, arguments);
}

//for iOS. img consumes memory. so reuse it.
Bitmap._reuseImages = [];
/**
 * Loads a image file and returns a new bitmap object.
 *
 * @static
 * @method load
 * @param {String} url The image url of the texture
 * @return Bitmap
 */
Bitmap.load = function(url) {
    var bitmap = Object.create(Bitmap.prototype);
    bitmap._defer = true;
    bitmap.initialize();

    bitmap._decodeAfterRequest = true;
    bitmap._requestImage(url);

    return bitmap;
};
/**
 * Takes a snapshot of the game screen and returns a new bitmap object.
 *
 * @static
 * @method snap
 * @param {Stage} stage The stage object
 * @return Bitmap
 */
Bitmap.snap = function(stage) {
    var width = Graphics.width;
    var height = Graphics.height;
    var bitmap = new Bitmap(width, height);
    var context = bitmap._context;
    var renderTexture = PIXI.RenderTexture.create(width, height);
    if (stage) {
        Graphics._renderer.render(stage, renderTexture);
        stage.worldTransform.identity();
        var canvas = null;
        if (Graphics.isWebGL()) {
            canvas = Graphics._renderer.extract.canvas(renderTexture);
        } else {
            canvas = renderTexture.baseTexture._canvasRenderTarget.canvas;
        }
        context.drawImage(canvas, 0, 0);
    } else {

    }
    renderTexture.destroy({ destroyBase: true });
    bitmap._setDirty();
    return bitmap;
};

Bitmap.request = function(url){
    var bitmap = Object.create(Bitmap.prototype);
    bitmap._defer = true;
    bitmap.initialize();

    bitmap._url = url;
    bitmap._loadingState = 'pending';

    return bitmap;
};
