"use strict";
var App_1 = require("../../App");
var Clamp_1 = require("../../utils/math/Clamp");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (target, event) {
    var client_rect, mouse_offset, hue;
    client_rect = target.getBoundingClientRect();
    mouse_offset = event.pageY - client_rect.top;
    mouse_offset = Clamp_1.default(mouse_offset, 0, client_rect.height);
    hue = 360 - (mouse_offset / client_rect.height) * 360;
    App_1.default.huePane.setHue(hue);
    App_1.default.tonePane.setHue(hue);
};
