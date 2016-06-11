"use strict";
var GetColourAtCursor_1 = require('./GetColourAtCursor');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (element) {
    element.addEventListener('click', GetColourAtCursor_1.default);
};
