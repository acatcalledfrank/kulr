"use strict";
var PositionTracker = (function () {
    function PositionTracker(iid, options) {
        var _this = this;
        this.iid = iid;
        this.trackPosition = function (event) {
        };
        this.stopTracking = function () {
            console.log('mouse up');
            document.addEventListener('mousemove', _this.trackFunc);
            document.removeEventListener('mouseup', _this.stopTracking);
        };
    }
    PositionTracker.prototype.startTracking = function (event, trackFunc) {
        this.target = event.target;
        this.trackFunc = trackFunc;
        document.addEventListener('mousemove', this.trackFunc);
        document.addEventListener('mouseup', this.stopTracking);
    };
    return PositionTracker;
}());
exports.PositionTracker = PositionTracker;
