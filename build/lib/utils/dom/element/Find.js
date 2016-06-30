"use strict";
var StringUtils_1 = require("../../string/StringUtils");
function findAny(selector) {
    if (!selector)
        return null;
    if (~selector.indexOf('#'))
        return findById(selector);
    if (~selector.indexOf('.'))
        return findByClass(selector);
    return null;
}
exports.findAny = findAny;
function findOne(selector) {
    var result;
    result = findAny(selector);
    if (!result)
        return null;
    if (result instanceof HTMLElement)
        return result;
    return result.item(0);
}
exports.findOne = findOne;
function findByClass(className) {
    return document.getElementsByClassName(StringUtils_1.trimString(className, 1));
}
exports.findByClass = findByClass;
function findById(id) {
    return document.getElementById(StringUtils_1.trimString(id, 1));
}
exports.findById = findById;
