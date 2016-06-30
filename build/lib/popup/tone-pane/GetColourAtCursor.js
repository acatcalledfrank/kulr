"use strict";
var Clamp_1 = require("../../utils/math/Clamp");
function getSaturationAndLightnessAtCursor(target, event) {
    var client_rect, mouse_offset_x, mouse_offset_y, saturation, lightness;
    client_rect = target.getBoundingClientRect();
    mouse_offset_x = (event.pageX - client_rect.left) / client_rect.width;
    mouse_offset_y = (event.pageY - client_rect.top) / client_rect.height;
    saturation = Clamp_1.clamp(mouse_offset_x, 0, 1);
    lightness = 0.5 - Clamp_1.clamp(mouse_offset_y, 0, 1) * 0.5 + (0.5 - saturation * 0.5);
    return { hue: null, saturation: saturation, lightness: lightness };
}
exports.getSaturationAndLightnessAtCursor = getSaturationAndLightnessAtCursor;
