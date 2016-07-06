"use strict";
function clickWasOutside(event, iid) {
    var parent;
    parent = event.target;
    while (parent) {
        if (parent.dataset['iid'] === iid)
            return false;
        parent = parent.parentElement;
    }
    return true;
}
exports.clickWasOutside = clickWasOutside;
