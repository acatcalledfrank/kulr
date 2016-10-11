"use strict";
var Find_1 = require("../../utils/dom/element/Find");
var App_1 = require("../../App");
var Swatch = (function () {
    function Swatch(iid, element) {
        var _this = this;
        this.iid = iid;
        this.element = element;
        this.onColourSet = function () {
            _this.element.style.backgroundColor = App_1.default.palette.getHexString();
        };
    }
    Swatch.prototype.setup = function () {
        if (!this.element)
            return;
        App_1.default.events.updateColour.add(this.onColourSet);
    };
    return Swatch;
}());
exports.Swatch = Swatch;
function createSwatches(selectors) {
    var _this = this;
    selectors.map(function (selector) {
        saveSwatch(new Swatch(_this.iid, Find_1.findOne(selector)));
    });
}
exports.createSwatches = createSwatches;
function setupSwatches() {
    getAppSwatchList().map(function (swatch) {
        swatch.setup();
    });
}
exports.setupSwatches = setupSwatches;
function getAppSwatchList() {
    return App_1.default.swatches || (App_1.default.swatches = []);
}
function saveSwatch(swatch) {
    return getAppSwatchList().push(swatch);
}
