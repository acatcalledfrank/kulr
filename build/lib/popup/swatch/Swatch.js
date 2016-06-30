"use strict";
var Find_1 = require("../../utils/dom/element/Find");
var App_1 = require("../../App");
var Swatch = (function () {
    function Swatch(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onColourSet = function () {
            _this.element.style.backgroundColor = App_1.default.palette.getHexString();
        };
    }
    Swatch.prototype.setup = function () {
        this.element = this.getElement();
        if (!this.element)
            return;
        App_1.default.events.updateColour.add(this.onColourSet);
    };
    Swatch.prototype.getElement = function () {
        return Find_1.findOne(this.options.elements.swatch);
    };
    return Swatch;
}());
exports.Swatch = Swatch;
