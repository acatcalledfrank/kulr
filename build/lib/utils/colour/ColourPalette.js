"use strict";
var App_1 = require("../../App");
var HslToRgb_1 = require("./HslToRgb");
var RgbToString_1 = require("./RgbToString");
var RgbToHsl_1 = require("./RgbToHsl");
var ColourPalette = (function () {
    function ColourPalette(iid, options) {
        this.iid = iid;
        this.options = options;
    }
    ColourPalette.prototype.setup = function () {
        this.hsl = { hue: 0, saturation: 0, lightness: 0 };
        this.rgb = { r: 0, g: 0, b: 0 };
    };
    ColourPalette.prototype.setHue = function (hue) {
        this.hsl.hue = hue;
    };
    ColourPalette.prototype.setSaturation = function (saturation) {
        this.hsl.saturation = saturation;
    };
    ColourPalette.prototype.setLightness = function (lightness) {
        this.hsl.lightness = lightness;
    };
    ColourPalette.prototype.setRgb = function (rgb) {
    };
    ColourPalette.prototype.getHsl = function () {
        return this.hsl;
    };
    ColourPalette.prototype.getRgb = function () {
        return HslToRgb_1.hslToRgb(this.hsl.hue, this.hsl.saturation, this.hsl.lightness);
    };
    ColourPalette.prototype.getHexString = function () {
        return RgbToString_1.rgbToHex(this.getRgb());
    };
    ColourPalette.prototype.setHexString = function (hex) {
        var hsl;
        this.hsl = RgbToHsl_1.rgbToHsl(RgbToString_1.hexToRgb(hex));
        App_1.default.events.updateColour.dispatch(App_1.default.palette.getHexString());
    };
    return ColourPalette;
}());
exports.ColourPalette = ColourPalette;
