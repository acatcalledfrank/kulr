"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (preventSelections) {
    if (preventSelections === void 0) { preventSelections = true; }
    var styles, value;
    styles =
        [
            'webkitTouchCallout',
            'webkitUserSelect',
            'mozUserSelect',
            'msUserSelect',
            'userSelect'
        ];
    value = preventSelections === true ? 'none' : '';
    for (var i = 0; i < styles.length; i++) {
        document.body.style[styles[i]] = value;
    }
};
