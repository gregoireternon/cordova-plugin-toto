var browser = require('cordova/platform');

module.exports = {
    getToto: function (success, error) {
        setTimeout(function () {
            success({
                koko: "TOTOJSSUCCESS"
            });
        }, 0);
    }
};

require('cordova/exec/proxy').add('Toto', module.exports);