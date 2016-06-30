"use strict";
function hashString(hex) {
    var characters;
    if (isHashed(hex))
        return hex;
    characters = hex.split('');
    characters.unshift('#');
    return characters.join('');
}
exports.hashString = hashString;
function dehashString(hex) {
    var characters;
    if (isHashed(hex) === false)
        return hex;
    characters = hex.split('');
    characters.shift();
    return characters.join('');
}
exports.dehashString = dehashString;
function isHashed(hex) {
    var characters;
    characters = hex.split('');
    return characters[0] === '#';
}
