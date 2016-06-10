"use strict";
var App_1 = require("../App");
var Css_1 = require("../utils/dom/style/Css");
var HuePane = (function () {
    function HuePane(options) {
        this.options = options;
    }
    HuePane.prototype.setup = function () {
        this.element = this.getElement();
    };
    HuePane.prototype.getElement = function () {
        return this.createElement();
    };
    HuePane.prototype.createElement = function () {
        var element;
        element = document.createElement('svg');
        Css_1.default.addClass(element, 'picky-hue-pane');
        App_1.default.popup.element.appendChild(element);
        return element;
    };
    HuePane.prototype.drawHues = function () {
    };
    return HuePane;
}());
exports.HuePane = HuePane;
