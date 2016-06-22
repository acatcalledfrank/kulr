"use strict";
var Find_1 = require("../utils/dom/element/Find");
var App_1 = require("../App");
var Css_1 = require("../utils/dom/style/Css");
var HuePane_1 = require("./hue-pane/HuePane");
var TonePane_1 = require("./tone-pane/TonePane");
var Popup = (function () {
    function Popup(options) {
        this.options = options;
    }
    Popup.prototype.setup = function () {
        this.element = this.getElement();
        App_1.default.tonePane = new TonePane_1.TonePane(this.options);
        App_1.default.huePane = new HuePane_1.HuePane(this.options);
        App_1.default.tonePane.setup();
        App_1.default.huePane.setup();
    };
    Popup.prototype.getElement = function () {
        var element;
        element = Find_1.Find.one(this.options.elements.popup);
        if (element)
            return element;
        return this.createElement();
    };
    Popup.prototype.createElement = function () {
        var element;
        element = document.createElement('div');
        Css_1.default.addClass(element, 'picky-popup');
        App_1.default.toggle.element.parentNode.insertBefore(element, App_1.default.toggle.element.nextSibling);
        return element;
    };
    Popup.prototype.toggleVisibility = function () {
        Css_1.default.toggleClass(this.element, 'active');
    };
    return Popup;
}());
exports.Popup = Popup;
