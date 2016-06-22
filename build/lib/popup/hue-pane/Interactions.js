"use strict";
var GetHueAtCursor_1 = require('./GetHueAtCursor');
var PreventSelections_1 = require('../../utils/dom/style/PreventSelections');
var Interactions = (function () {
    function Interactions(element) {
        var _this = this;
        this.element = element;
        this.onMouseDown = function () {
            PreventSelections_1.default();
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
        };
        this.onMouseMove = function (event) {
            GetHueAtCursor_1.default(_this.element, event);
        };
        this.onMouseUp = function () {
            PreventSelections_1.default(false);
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
