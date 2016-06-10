"use strict";
var Css = (function () {
    function Css() {
    }
    Css.addClass = function (element, className) {
        if (!element)
            return false;
        element.classList.add(className);
    };
    Css.removeClass = function (element, className) {
        if (!element)
            return false;
        element.classList.remove(className);
    };
    Css.toggleClass = function (element, className, toggle) {
        if (Css.hasClass(element, className) === false) {
            Css.addClass(element, className);
        }
        else {
            Css.removeClass(element, className);
        }
    };
    Css.hasClass = function (element, className) {
        if (!element)
            return false;
        return element.classList.contains(className);
    };
    return Css;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Css;
