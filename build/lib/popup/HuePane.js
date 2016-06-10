"use strict";
var App_1 = require("../App");
var Css_1 = require("../utils/dom/style/Css");
var CreateGradientElement_1 = require("./svg/CreateGradientElement");
var FillGradient_1 = require("./svg/FillGradient");
var CreateColourRect_1 = require("./svg/CreateColourRect");
var UniqueId_1 = require('../utils/UniqueId');
var HuePane = (function () {
    function HuePane(options) {
        this.options = options;
    }
    HuePane.prototype.setup = function () {
        this.element = this.getElement();
        CreateColourRect_1.default(this.element, this.drawGradient());
    };
    HuePane.prototype.getElement = function () {
        return this.createElement();
    };
    HuePane.prototype.createElement = function () {
        var element;
        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        Css_1.default.addClass(element, 'picky-hue-pane');
        App_1.default.popup.element.appendChild(element);
        return element;
    };
    HuePane.prototype.populateColours = function () {
        return this.drawGradient();
    };
    HuePane.prototype.drawGradient = function () {
        var id, stops;
        id = UniqueId_1.default('picky-svg-gradient-');
        stops =
            [
                {
                    colour: '#ff0000',
                    offset: '0%'
                },
                {
                    colour: '#0000ff',
                    offset: '100%'
                }
            ];
        FillGradient_1.default(CreateGradientElement_1.default(this.element, id), stops);
        return id;
    };
    return HuePane;
}());
exports.HuePane = HuePane;
