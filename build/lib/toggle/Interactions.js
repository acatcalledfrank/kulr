"use strict";
var App_1 = require("../App");
var ClickOutside_1 = require("../utils/dom/interaction/ClickOutside");
var Interactions = (function () {
    function Interactions(iid, options) {
        var _this = this;
        this.iid = iid;
        this.options = options;
        this.onTogglePopup = function (iid) {
            if (iid === _this.iid && App_1.default.state.open) {
                document.addEventListener('mouseup', _this.onDocumentClick);
                return;
            }
            document.removeEventListener('mouseup', _this.onDocumentClick);
        };
        this.onDocumentClick = function (event) {
            if (ClickOutside_1.clickWasOutside(event, _this.iid) && !App_1.default.state.dragging) {
                App_1.default.state.open = false;
                App_1.default.events.togglePopup.dispatch(_this.iid);
            }
        };
    }
    Interactions.prototype.listen = function () {
        App_1.default.events.togglePopup.add(this.onTogglePopup);
    };
    return Interactions;
}());
exports.Interactions = Interactions;
