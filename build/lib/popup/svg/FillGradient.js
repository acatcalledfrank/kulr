"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (gradient, stops) {
    var svg_ns, stop;
    svg_ns = gradient.parentElement.namespaceURI;
    for (var i = 0; i < stops.length; i++) {
        stop = document.createElementNS(svg_ns, 'stop');
        stop.setAttribute('offset', stops[i].offset);
        stop.setAttribute('stop-color', stops[i].colour);
        stop.setAttribute('stop-opacity', stops[i].opacity || '1');
        gradient.appendChild(stop);
    }
};
