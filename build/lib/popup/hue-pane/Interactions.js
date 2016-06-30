"use strict";
var App_1 = require("../../App");
var GetHueAtCursor_1 = require("./GetHueAtCursor");
var PreventSelections_1 = require("../../utils/dom/style/PreventSelections");
var Interactions = (function () {
    function Interactions(element) {
        var _this = this;
        this.element = element;
        this.onMouseDown = function () {
            PreventSelections_1.preventSelections();
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
        };
        this.onMouseMove = function (event) {
            var hue;
            hue = GetHueAtCursor_1.getHueAtCursor(_this.element, event);
            App_1.default.palette.setHue(hue);
            App_1.default.events.updateColour.dispatch();
        };
        this.onMouseUp = function () {
            PreventSelections_1.preventSelections(false);
            document.removeEventListener('mousemove', _this.onMouseMove);
            document.removeEventListener('mouseup', _this.onMouseUp);
        };
    }
    Interactions.prototype.listen = function () {
        this.element.addEventListener('mousedown', this.onMouseDown);
    };
    return Interactions;
}());
exports.Interactions = Interactions;
