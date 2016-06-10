"use strict";
var lodash_1 = require('lodash');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (nodes, styles) {
    lodash_1.forEach(nodes, function (node) {
        lodash_1.forEach(styles, function (new_style) {
            lodash_1.set(node, 'style.' + new_style.style, new_style.value);
        });
    });
};
