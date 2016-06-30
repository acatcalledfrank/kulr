"use strict";
function rgbToHsl(rgb) {
    var max, min, r, g, b, h, s, l, d;
    r = rgb.r / 255;
    g = rgb.g / 255;
    b = rgb.b / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = s = l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    }
    else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { hue: h, saturation: s, lightness: l };
}
exports.rgbToHsl = rgbToHsl;
