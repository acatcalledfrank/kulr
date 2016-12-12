"use strict";
var Find_1 = require("../utils/dom/element/Find");
var App_1 = require("../App");
var HuePane_1 = require("./hue-pane/HuePane");
var TonePane_1 = require("./tone-pane/TonePane");
var Swatch_1 = require("./swatch/Swatch");
var TextInput_1 = require("./text-input/TextInput");
var Css_1 = require("../utils/dom/style/Css");
var Css_2 = require("../utils/dom/style/Css");
var ShowElement_1 = require('../utils/dom/style/ShowElement');
var Popup = (function () {
    function Popup(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onTogglePopup = function (iid) {
            if (iid !== _this.iid) {
                Css_1.removeClass(_this.element, 'open');
                return;
            }
            Css_1.toggleClass(_this.element, 'open', App_1.default.state.open);
        };
    }
    Popup.prototype.setup = function () {
        var _this = this;
        this.element = this.getElement();
        ShowElement_1.hideElement(this.element);
        this.element.dataset['iid'] = this.iid;
        Swatch_1.createSwatches(this.options.elements.swatches);
        App_1.default.textInput = new TextInput_1.TextInput(this.iid, this.options);
        App_1.default.tonePane = new TonePane_1.TonePane(this.iid, this.options);
        App_1.default.huePane = new HuePane_1.HuePane(this.iid, this.options);
        Swatch_1.setupSwatches();
        App_1.default.textInput.setup();
        App_1.default.tonePane.setup();
        App_1.default.huePane.setup();
        this.listen();
        setTimeout(function () { return ShowElement_1.showElement(_this.element); }, 2000);
    };
    Popup.prototype.getElement = function () {
        var element;
        element = Find_1.findOne(this.options.elements.popup);
        if (element)
            return element;
        return this.createElement();
    };
    Popup.prototype.createElement = function () {
        var element;
        element = document.createElement('div');
        Css_2.addClass(element, 'picky-popup');
        App_1.default.toggle.element.parentNode.insertBefore(element, App_1.default.toggle.element.nextSibling);
        return element;
    };
    Popup.prototype.listen = function () {
        App_1.default.events.togglePopup.add(this.onTogglePopup);
    };
    return Popup;
}());
exports.Popup = Popup;
