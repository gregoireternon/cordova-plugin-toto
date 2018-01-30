

var argscheck = require('cordova/argscheck');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var cordova = require('cordova');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function Toto () {
    console.log('Toto declared');

}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Toto.prototype.getInfo = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Toto.getInfo', arguments);
    exec(successCallback, errorCallback, 'Toto', 'getToto', []);
};

Toto.prototype.initGt = function(){
    this.koko = null;

    var me = this;
    console.log('Toto ready');
    me.getInfo(function (info) {
        // ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
        // TODO: CB-5105 native implementations should not return info.cordova
        var buildLabel = cordova.version;
        me.koko = info.koko;
    }, function (e) {
        me.koko = 'ERROR';
        console.log('Toto ERROR:'+e);
        utils.alert('[ERROR] Error initializing Cordova: ' + e);
    });

};


module.exports = new Toto();
