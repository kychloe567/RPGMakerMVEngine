// The static class that handles terms and messages.
function TextManager() {
    throw new Error('This is a static class');
}


TextManager.basic = function(basicId) {
    return $dataSystem.terms.basic[basicId] || '';
};

TextManager.param = function(paramId) {
    return $dataSystem.terms.params[paramId] || '';
};

TextManager.command = function(commandId) {
    return $dataSystem.terms.commands[commandId] || '';
};

TextManager.message = function(messageId) {
    return $dataSystem.terms.messages[messageId] || '';
};

TextManager.getter = function(method, param) {
    return {
        get: function() {
            return this[method](param);
        },
        configurable: true
    };
};
