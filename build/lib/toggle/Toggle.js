"use strict";
var Find_1 = require("../utils/dom/element/Find");
var App_1 = require("../App");
var Css_1 = require("../utils/dom/style/Css");
var Interactions_1 = require("./Interactions");
var Toggle = (function () {
    function Toggle(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onClick = function (event) {
            App_1.default.state.open = !App_1.default.state.open;
            App_1.default.events.togglePopup.dispatch(_this.iid);
        };
        this.onTogglePopup = function (iid) {
            Css_1.toggleClass(_this.element, 'open', App_1.default.state.open);
        };
    }
    Toggle.prototype.setup = function () {
        this.element = this.getElement();
        this.element.dataset['iid'] = this.iid;
        this.listen();
        new Interactions_1.Interactions(this.iid, this.options).listen();
    };
    Toggle.prototype.getElement = function () {
        return Find_1.findOne(this.options.elements.toggle);
    };
    Toggle.prototype.listen = function () {
        this.element.addEventListener('click', this.onClick);
        App_1.default.events.togglePopup.add(this.onTogglePopup);
    };
    return Toggle;
}());
exports.Toggle = Toggle;
