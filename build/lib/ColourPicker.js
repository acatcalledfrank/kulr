"use strict";
var Popup_1 = require("./popup/Popup");
var Toggle_1 = require("./toggle/Toggle");
var App_1 = require("./App");
var UniqueId_1 = require("./utils/UniqueId");
var ColourPalette_1 = require("./utils/colour/ColourPalette");
var Events_1 = require("./events/Events");
var State_1 = require("./state/State");
var ColourPicker = (function () {
    function ColourPicker(options) {
        console.log('new picky!');
        this.setup(options);
    }
    ColourPicker.prototype.setup = function (options) {
        this.iid = UniqueId_1.getUniqueId('picky-');
        App_1.default.state = new State_1.State(this.iid, options);
        App_1.default.events = new Events_1.Events(this.iid, options);
        App_1.default.palette = new ColourPalette_1.ColourPalette(this.iid, options);
        App_1.default.popup = new Popup_1.Popup(this.iid, options);
        App_1.default.toggle = new Toggle_1.Toggle(this.iid, options);
        App_1.default.events.setup();
        App_1.default.palette.setup();
        App_1.default.toggle.setup();
        App_1.default.popup.setup();
    };
    Object.defineProperty(ColourPicker.prototype, "onUpdate", {
        get: function () {
            return App_1.default.events.updateColour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColourPicker.prototype, "hex", {
        get: function () {
            return App_1.default.palette.getHexString();
        },
        enumerable: true,
        configurable: true
    });
    ColourPicker.prototype.destroy = function () {
    };
    return ColourPicker;
}());
exports.ColourPicker = ColourPicker;
