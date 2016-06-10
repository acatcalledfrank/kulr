"use strict";
var Popup_1 = require("./popup/Popup");
var Toggle_1 = require("./toggle/Toggle");
var App_1 = require("./App");
var ColourPicker = (function () {
    function ColourPicker(options) {
        console.log('new picky!');
        this.setup(options);
    }
    ColourPicker.prototype.setup = function (options) {
        App_1.default.popup = new Popup_1.Popup(options);
        App_1.default.toggle = new Toggle_1.Toggle(options);
        App_1.default.toggle.setup();
        App_1.default.popup.setup();
    };
    ColourPicker.prototype.destroy = function () {
    };
    return ColourPicker;
}());
exports.ColourPicker = ColourPicker;
