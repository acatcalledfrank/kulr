"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (prefix) {
    if (prefix === void 0) { prefix = ''; }
    return prefix + new Date().getTime();
};
