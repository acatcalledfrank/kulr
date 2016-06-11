"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (gradient, points) {
    gradient.setAttribute('x1', points[0]);
    gradient.setAttribute('y1', points[1]);
    gradient.setAttribute('x2', points[2]);
    gradient.setAttribute('y2', points[3]);
    return gradient;
};
