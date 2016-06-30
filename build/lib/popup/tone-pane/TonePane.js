"use strict";
var App_1 = require("../../App");
var Css_1 = require("../../utils/dom/style/Css");
var CreateGradientElement_1 = require("../svg/CreateGradientElement");
var SetGradientDirection_1 = require("../svg/SetGradientDirection");
var FillGradient_1 = require("../svg/FillGradient");
var CreateColourRect_1 = require("../svg/CreateColourRect");
var Interactions_1 = require('./Interactions');
var UniqueId_1 = require("../../utils/UniqueId");
var Find_1 = require("../../utils/dom/element/Find");
var FillContainer_1 = require("../../utils/dom/style/FillContainer");
var TonePane = (function () {
    function TonePane(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onColourSet = function () {
            _this.setHue(App_1.default.palette.hsl.hue * 360);
        };
    }
    TonePane.prototype.setup = function () {
        this.element = this.createGradientElement();
        CreateColourRect_1.default(this.element, this.drawGradient('#ffffff', ['0', '0', '100%', '0']));
        CreateColourRect_1.default(this.element, this.drawGradient('#000000', ['0', '100%', '0', '0']));
        new Interactions_1.Interactions(this.iid, this.element).listen();
        App_1.default.events.updateColour.add(this.onColourSet);
    };
    TonePane.prototype.createGradientElement = function () {
        var element;
        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        Css_1.default.addClass(element, 'picky-tone-pane__palette');
        FillContainer_1.fillContainer(element);
        this.getContainer().appendChild(element);
        return element;
    };
    TonePane.prototype.getContainer = function () {
        return Find_1.findOne(this.options.elements.tone_pane);
    };
    TonePane.prototype.drawGradient = function (fill, direction) {
        var id, gradient, stops;
        id = UniqueId_1.getUniqueId('picky-svg-gradient-');
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
        this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    };
    TonePane.prototype.setSaturation = function (saturation) {
    };
    TonePane.prototype.setLightness = function (lightness) {
    };
    TonePane.prototype.getCombinedHSLColour = function () {
    };
    return TonePane;
}());
exports.TonePane = TonePane;
