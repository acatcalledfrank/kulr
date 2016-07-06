"use strict";
var Find_1 = require("../../utils/dom/element/Find");
var CreateGradientElement_1 = require("../svg/CreateGradientElement");
var SetGradientDirection_1 = require("../svg/SetGradientDirection");
var FillGradient_1 = require("../svg/FillGradient");
var CreateColourRect_1 = require("../svg/CreateColourRect");
var Interactions_1 = require('./Interactions');
var UniqueId_1 = require("../../utils/UniqueId");
var FillContainer_1 = require("../../utils/dom/style/FillContainer");
var Css_1 = require("../../utils/dom/style/Css");
var HuePane = (function () {
    function HuePane(iid, options) {
        this.iid = iid;
        this.options = options;
    }
    HuePane.prototype.setup = function () {
        this.element = this.createGradientElement();
        CreateColourRect_1.default(this.element, this.drawGradient());
        new Interactions_1.Interactions(this.element).listen();
    };
    HuePane.prototype.createGradientElement = function () {
        var element;
        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        Css_1.addClass(element, 'picky-hue-pane__palette');
        FillContainer_1.fillContainer(element);
        this.getContainer().appendChild(element);
        return element;
    };
    HuePane.prototype.getContainer = function () {
        return Find_1.findOne(this.options.elements.hue_pane);
    };
    HuePane.prototype.drawGradient = function () {
        var id, gradient, stops;
        id = UniqueId_1.getUniqueId('picky-svg-gradient-');
        stops =
            [
                {
                    colour: '#ff0000',
                    offset: '0%'
                },
                {
                    colour: '#ff00ff',
                    offset: '16%'
                },
                {
                    colour: '#0000ff',
                    offset: '33%'
                },
                {
                    colour: '#00ffff',
                    offset: '50%'
                },
                {
                    colour: '#00ff00',
                    offset: '67%'
                },
                {
                    colour: '#ffff00',
                    offset: '84%'
                },
                {
                    colour: '#ff0000',
                    offset: '100%'
                }
            ];
        gradient = CreateGradientElement_1.default(this.element, id);
        SetGradientDirection_1.default(gradient, ['0', '0', '0', '100%']);
        FillGradient_1.default(gradient, stops);
        return id;
    };
    HuePane.prototype.setHue = function (hue) {
    };
    return HuePane;
}());
exports.HuePane = HuePane;
