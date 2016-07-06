"use strict";
function addClass(element, className) {
    if (!element)
        return false;
    element.classList.add(className);
}
exports.addClass = addClass;
function removeClass(element, className) {
    if (!element)
        return false;
    element.classList.remove(className);
}
exports.removeClass = removeClass;
function toggleClass(element, className, add) {
    var has_class;
    if (add !== undefined) {
        add ? addClass(element, className) : removeClass(element, className);
        return;
    }
    has_class = hasClass(element, className);
    if (has_class === false) {
        addClass(element, className);
    }
    else {
        removeClass(element, className);
    }
    return !has_class;
}
exports.toggleClass = toggleClass;
function hasClass(element, className) {
    if (!element)
        return false;
    return element.classList.contains(className);
}
exports.hasClass = hasClass;
