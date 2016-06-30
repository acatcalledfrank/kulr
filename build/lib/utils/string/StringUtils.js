"use strict";
function trimString(input, start, end) {
    var output, split;
    output = input.trim();
    if (!start && !end)
        return output;
    split = output.split('');
    split.splice(0, start);
    split.splice(-1, end);
    return split.join('');
}
exports.trimString = trimString;
function prefixString(input, prefix, length) {
    if (length === void 0) { length = input.length + 1; }
    var characters;
    characters = input.split('');
    while (characters.length < length) {
        characters.unshift(prefix);
    }
    return characters.join('');
}
exports.prefixString = prefixString;
