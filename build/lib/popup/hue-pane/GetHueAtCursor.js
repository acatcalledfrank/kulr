"use strict";
var Clamp_1 = require("../../utils/math/Clamp");
function getHueAtCursor(target, event) {
    var client_rect, mouse_offset, hue;
    client_rect = target.getBoundingClientRect();
    mouse_offset = event.pageY - client_rect.top;
    mouse_offset = Clamp_1.clamp(mouse_offset, 0, client_rect.height);
    hue = 1 - (mouse_offset / client_rect.height);
    return hue;
}
exports.getHueAtCursor = getHueAtCursor;
