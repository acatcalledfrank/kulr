"use strict";
var signals = require('signals');
var Events = (function () {
    function Events(iid, options) {
        this.iid = iid;
        this.options = options;
    }
    Events.prototype.setup = function () {
        this.updateColour = new signals.Signal();
        this.togglePopup = new signals.Signal();
    };
    return Events;
}());
exports.Events = Events;
