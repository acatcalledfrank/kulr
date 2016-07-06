"use strict";
var App_1 = require("../../App");
var PreventSelections_1 = require("../../utils/dom/style/PreventSelections");
var GetColourAtCursor_1 = require("./GetColourAtCursor");
var Interactions = (function () {
    function Interactions(iid, element) {
        var _this = this;
        this.iid = iid;
        this.element = element;
        this.onMouseDown = function () {
            PreventSelections_1.preventSelections();
            App_1.default.state.dragging = true;
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
        };
        this.onMouseMove = function (event) {
            var hsl;
            hsl = GetColourAtCursor_1.getSaturationAndLightnessAtCursor(_this.element, event);
            App_1.default.palette.setSaturation(hsl.saturation);
            App_1.default.palette.setLightness(hsl.lightness);
            App_1.default.events.updateColour.dispatch();
        };
        this.onMouseUp = function (event) {
            PreventSelections_1.preventSelections(false);
            _this.onMouseMove(event);
            App_1.default.state.dragging = false;
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
