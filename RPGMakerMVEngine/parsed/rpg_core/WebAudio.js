/**
 * The audio object of Web Audio API.
 *
 * @class WebAudio
 * @constructor
 * @param {String} url The url of the audio file
 */
function WebAudio() {
    this.initialize.apply(this, arguments);
}


WebAudio._standAlone = (function(top){
    return !top.ResourceHandler;
})(this);

WebAudio._masterVolume   = 1;

WebAudio._context        = null;

WebAudio._masterGainNode = null;

WebAudio._initialized    = false;

WebAudio._unlocked       = false;
/**
 * Initializes the audio system.
 *
 * @static
 * @method initialize
 * @param {Boolean} noAudio Flag for the no-audio mode
 * @return {Boolean} True if the audio system is available
 */
WebAudio.initialize = function(noAudio) {
    if (!this._initialized) {
        if (!noAudio) {
            this._createContext();
            this._detectCodecs();
            this._createMasterGainNode();
            this._setupEventHandlers();
        }
        this._initialized = true;
    }
    return !!this._context;
};
/**
 * Checks whether the browser can play ogg files.
 *
 * @static
 * @method canPlayOgg
 * @return {Boolean} True if the browser can play ogg files
 */
WebAudio.canPlayOgg = function() {
    if (!this._initialized) {
        this.initialize();
    }
    return !!this._canPlayOgg;
};
/**
 * Checks whether the browser can play m4a files.
 *
 * @static
 * @method canPlayM4a
 * @return {Boolean} True if the browser can play m4a files
 */
WebAudio.canPlayM4a = function() {
    if (!this._initialized) {
        this.initialize();
    }
    return !!this._canPlayM4a;
};
/**
 * Sets the master volume of the all audio.
 *
 * @static
 * @method setMasterVolume
 * @param {Number} value Master volume (min: 0, max: 1)
 */
WebAudio.setMasterVolume = function(value) {
    this._masterVolume = value;
    if (this._masterGainNode) {
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, this._context.currentTime);
    }
};
/**
 * @static
 * @method _createContext
 * @private
 */
WebAudio._createContext = function() {
    try {
        if (typeof AudioContext !== 'undefined') {
            this._context = new AudioContext();
        } else if (typeof webkitAudioContext !== 'undefined') {
            this._context = new webkitAudioContext();
        }
    } catch (e) {
        this._context = null;
    }
};
/**
 * @static
 * @method _detectCodecs
 * @private
 */
WebAudio._detectCodecs = function() {
    var audio = document.createElement('audio');
    if (audio.canPlayType) {
        this._canPlayOgg = audio.canPlayType('audio/ogg');
        this._canPlayM4a = audio.canPlayType('audio/mp4');
    }
};
/**
 * @static
 * @method _createMasterGainNode
 * @private
 */
WebAudio._createMasterGainNode = function() {
    var context = WebAudio._context;
    if (context) {
        this._masterGainNode = context.createGain();
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, context.currentTime);
        this._masterGainNode.connect(context.destination);
    }
};
/**
 * @static
 * @method _setupEventHandlers
 * @private
 */
WebAudio._setupEventHandlers = function() {
    document.addEventListener("touchend", function() {
            var context = WebAudio._context;
            if (context && context.state === "suspended" && typeof context.resume === "function") {
                context.resume().then(function() {
                    WebAudio._onTouchStart();
                })
            } else {
                WebAudio._onTouchStart();
            }
    });
    document.addEventListener('touchstart', this._onTouchStart.bind(this));
    document.addEventListener('visibilitychange', this._onVisibilityChange.bind(this));
};
/**
 * @static
 * @method _onTouchStart
 * @private
 */
WebAudio._onTouchStart = function() {
    var context = WebAudio._context;
    if (context && !this._unlocked) {
        // Unlock Web Audio on iOS
        var node = context.createBufferSource();
        node.start(0);
        this._unlocked = true;
    }
};
/**
 * @static
 * @method _onVisibilityChange
 * @private
 */
WebAudio._onVisibilityChange = function() {
    if (document.visibilityState === 'hidden') {
        this._onHide();
    } else {
        this._onShow();
    }
};
/**
 * @static
 * @method _onHide
 * @private
 */
WebAudio._onHide = function() {
    if (this._shouldMuteOnHide()) {
        this._fadeOut(1);
    }
};
/**
 * @static
 * @method _onShow
 * @private
 */
WebAudio._onShow = function() {
    if (this._shouldMuteOnHide()) {
        this._fadeIn(0.5);
    }
};
/**
 * @static
 * @method _shouldMuteOnHide
 * @private
 */
WebAudio._shouldMuteOnHide = function() {
    return Utils.isMobileDevice();
};
/**
 * @static
 * @method _fadeIn
 * @param {Number} duration
 * @private
 */
WebAudio._fadeIn = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(0, currentTime);
        gain.linearRampToValueAtTime(this._masterVolume, currentTime + duration);
    }
};
/**
 * @static
 * @method _fadeOut
 * @param {Number} duration
 * @private
 */
WebAudio._fadeOut = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(this._masterVolume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
    }
};
