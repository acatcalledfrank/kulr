"use strict";
var Find_1 = require("../../utils/dom/element/Find");
var App_1 = require("../../App");
var Interaction_1 = require("./Interaction");
var TextInput = (function () {
    function TextInput(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onColourSet = function () {
            _this.element.value = App_1.default.palette.getHexString();
        };
    }
    TextInput.prototype.setup = function () {
        this.element = this.getElement();
        if (!this.element)
            return;
        new Interaction_1.Interactions(this.element).listen();
        App_1.default.events.updateColour.add(this.onColourSet);
    };
    TextInput.prototype.getElement = function () {
        return Find_1.findOne(this.options.elements.text_input);
    };
    return TextInput;
}());
exports.TextInput = TextInput;
