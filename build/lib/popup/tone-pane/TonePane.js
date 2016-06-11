"use strict";
var App_1 = require("../../App");
var Css_1 = require("../../utils/dom/style/Css");
var TonePane = (function () {
    function TonePane(options) {
        this.options = options;
    }
    TonePane.prototype.setup = function () {
        this.element = this.getElement();
    };
    TonePane.prototype.getElement = function () {
        return this.createElement();
    };
    TonePane.prototype.createElement = function () {
        var element;
        element = document.createElement('svg');
        Css_1.default.addClass(element, 'picky-tone-pane');
        App_1.default.popup.element.appendChild(element);
        return element;
    };
    return TonePane;
}());
exports.TonePane = TonePane;
