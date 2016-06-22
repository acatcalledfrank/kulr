"use strict";
var App_1 = require("../../App");
var Css_1 = require("../../utils/dom/style/Css");
var CreateGradientElement_1 = require("../svg/CreateGradientElement");
var SetGradientDirection_1 = require("../svg/SetGradientDirection");
var FillGradient_1 = require("../svg/FillGradient");
var CreateColourRect_1 = require("../svg/CreateColourRect");
var UniqueId_1 = require('../../utils/UniqueId');
var AddInteraction_1 = require('./AddInteraction');
var TonePane = (function () {
    function TonePane(options) {
        this.options = options;
    }
    TonePane.prototype.setup = function () {
        this.element = this.getElement();
        CreateColourRect_1.default(this.element, this.drawGradient('#ffffff', ['0', '0', '100%', '0']));
        CreateColourRect_1.default(this.element, this.drawGradient('#000000', ['0', '100%', '0', '0']));
        AddInteraction_1.default(this.element);
    };
    TonePane.prototype.getElement = function () {
        return this.createElement();
    };
    TonePane.prototype.createElement = function () {
        var element;
        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        Css_1.default.addClass(element, 'picky-tone-pane');
        App_1.default.popup.element.appendChild(element);
        return element;
    };
    TonePane.prototype.drawGradient = function (fill, direction) {
        var id, gradient, stops;
        id = UniqueId_1.default('picky-svg-gradient-');
        stops =
            [
                {
                    colour: fill,
                    offset: '0%'
                },
                {
                    colour: fill,
                    opacity: '0',
                    offset: '100%'
                }
            ];
        gradient = CreateGradientElement_1.default(this.element, id);
        SetGradientDirection_1.default(gradient, direction);
        FillGradient_1.default(gradient, stops);
        return id;
    };
    TonePane.prototype.setHue = function (hue) {
        console.log('settin hude');
        this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    };
    return TonePane;
}());
exports.TonePane = TonePane;
