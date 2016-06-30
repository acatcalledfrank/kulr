"use strict";
var Find_1 = require("../utils/dom/element/Find");
var App_1 = require("../App");
var Toggle = (function () {
    function Toggle(iid, options) {
        this.iid = iid;
        this.options = options;
    }
    Toggle.prototype.setup = function () {
        this.element = this.getElement();
        this.listen();
    };
    Toggle.prototype.getElement = function () {
        return Find_1.findOne(this.options.elements.toggle);
    };
    Toggle.prototype.listen = function () {
        this.element.addEventListener('click', function (event) { return App_1.default.popup.toggleVisibility(); });
    };
    return Toggle;
}());
exports.Toggle = Toggle;
