"use strict";
var UrlUtils_1 = require('../../utils/url/UrlUtils');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (svg, gradient_id) {
    var rect;
    rect = document.createElementNS(svg.namespaceURI, 'rect');
    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'url(' + UrlUtils_1.getCurrentUrl() + '#' + gradient_id + ')');
    svg.appendChild(rect);
};
