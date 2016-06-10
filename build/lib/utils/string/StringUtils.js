"use strict";
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.trim = function (input, start, end) {
        var output, split;
        output = input.trim();
        if (!start && !end)
            return output;
        split = output.split('');
        split.splice(0, start);
        split.splice(-1, end);
        return split.join('');
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
