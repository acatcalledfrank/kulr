"use strict";
var Popup_1 = require("./popup/Popup");
var Picky = (function () {
    function Picky(options) {
        console.log('jasjhda');
        this.setup(options);
    }
    Picky.prototype.setup = function (options) {
        this.popup = new Popup_1.Popup();
    };
    Picky.prototype.destroy = function () {
    };
    return Picky;
}());
exports.Picky = Picky;
