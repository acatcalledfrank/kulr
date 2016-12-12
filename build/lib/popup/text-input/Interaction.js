"use strict";
var App_1 = require("../../App");
var Interactions = (function () {
    function Interactions(element) {
        var _this = this;
        this.element = element;
        this.onContentInput = function () {
            App_1.default.palette.setHexString(_this.element.value);
        };
    }
    Interactions.prototype.listen = function () {
        this.element.addEventListener('input', this.onContentInput);
    };
    return Interactions;
}());
exports.Interactions = Interactions;
