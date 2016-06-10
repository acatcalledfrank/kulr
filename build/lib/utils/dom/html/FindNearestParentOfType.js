"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (selector, tag) {
    tag = tag.toUpperCase();
    while (selector) {
        if (selector.tagName && selector.tagName === tag)
            return selector;
        selector = selector.parentElement;
    }
    return null;
};
