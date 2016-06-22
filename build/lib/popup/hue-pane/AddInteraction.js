"use strict";
var GetHueAtCursor_1 = require('./GetHueAtCursor');
var App_1 = require("../../App");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (element) {
    element.addEventListener('mousedown', function (event) { return App_1.default.positionTracker.startTracking(event, GetHueAtCursor_1.default); });
};
