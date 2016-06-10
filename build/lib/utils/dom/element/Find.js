"use strict";
var StringUtils_1 = require("../../string/StringUtils");
var Find = (function () {
    function Find() {
    }
    Find.any = function (selector) {
        if (!selector)
            return null;
        if (~selector.indexOf('#'))
            return Find.byId(selector);
        if (~selector.indexOf('.'))
            return Find.byClass(selector);
        return null;
    };
    Find.one = function (selector) {
        var result;
        result = Find.any(selector);
        if (!result)
            return null;
        if (result instanceof HTMLElement)
            return result;
        return result.item(0);
    };
    Find.byClass = function (className) {
        return document.getElementsByClassName(StringUtils_1.StringUtils.trim(className, 1));
    };
    Find.byId = function (id) {
        return document.getElementById(StringUtils_1.StringUtils.trim(id, 1));
    };
    return Find;
}());
exports.Find = Find;
