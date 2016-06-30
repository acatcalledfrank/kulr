"use strict";
function getUniqueId(prefix) {
    if (prefix === void 0) { prefix = ''; }
    return prefix + Math.random() * 10;
}
exports.getUniqueId = getUniqueId;
