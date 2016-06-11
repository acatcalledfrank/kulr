"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (event) {
    console.log('getting colour', event);
    var client_rect, mouse_offset;
    client_rect = event.target.getBoundingClientRect();
    mouse_offset = event.pageY - client_rect.top;
    console.log(mouse_offset);
};
