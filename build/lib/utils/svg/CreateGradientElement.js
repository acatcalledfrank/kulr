"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (svg, id, type) {
    if (type === void 0) { type = 'linearGradient'; }
    var svg_ns, defs, gradient;
    svg_ns = svg.namespaceURI;
    defs = (svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svg_ns, 'defs'), svg.firstChild));
    gradient = document.createElementNS(svg_ns, type);
    gradient.setAttribute('id', id);
    defs.appendChild(gradient);
    return gradient;
};
