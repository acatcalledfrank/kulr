"use strict";
var Validator_1 = require("./Validator");
function rgbToHex(rgb) {
    var hex;
    hex = ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    return '#' + hex;
}
exports.rgbToHex = rgbToHex;
function hexToRgb(hex) {
    var bigint, r, g, b;
    hex = Validator_1.dehashString(expandShortHexCode(hex));
    bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
    return { r: r, g: g, b: b };
}
exports.hexToRgb = hexToRgb;
function expandShortHexCode(hex) {
    var regexp;
    regexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    return hex.replace(regexp, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
}
exports.expandShortHexCode = expandShortHexCode;
