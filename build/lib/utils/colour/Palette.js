"use strict";
var Validator_1 = require("./Validator");
var Palette = (function () {
    function Palette(iid, options) {
        this.iid = iid;
        this.options = options;
    }
    Palette.prototype.setup = function () {
        this.hsl = { hue: 0, saturation: 0, lightness: 0 };
        this.rgb = { r: 0, g: 0, b: 0 };
    };
    Palette.prototype.setHue = function (hue) {
    };
    Palette.prototype.setSaturation = function (saturation) {
    };
    Palette.prototype.setLightness = function (lightness) {
    };
    Palette.prototype.setRgb = function (rgb) {
        if (Validator_1.isRgbString(rgb)) {
        }
    };
    Palette.prototype.getHsl = function () {
        return this.hsl;
    };
    Palette.prototype.getRgb = function () {
        return this.rgb;
    };
    Palette.prototype.getRgbString = function () {
        return null;
    };
    return Palette;
}());
exports.Palette = Palette;
