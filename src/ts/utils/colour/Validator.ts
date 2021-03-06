/**
 * check that a hex string has a hash at the start
 * @param hex
 * @returns {string}
 */
export function hashString(hex: string) : string
{
    let characters: string[];

    //  check the first character;
    //  if it's a hash return the string unchanged

    if (isHashed(hex)) return hex;

    //  split string into characters

    characters = hex.split('');

    //  add a hash to the start of the string

    characters.unshift('#');

    //  then recompile and return the string

    return characters.join('');
}


/**
 * remove hash from the start of a hex string
 * @param hex
 * @return {string}
 */
export function dehashString(hex: string) : string
{
    let characters: string[];

    //  check the first character;
    //  if it's a NOT a hash return the string unchanged

    if (isHashed(hex) === false) return hex;

    //  split string into characters

    characters = hex.split('');

    //  if it's not a hash then add one

    characters.shift();

    //  then recompile and return the string

    return characters.join('');
}


/**
 * check whether a hex string has a hash at the start
 * @param hex
 * @returns {boolean}
 */
function isHashed(hex: string) : boolean
{
    let characters: string[];

    //  split string into characters

    characters = hex.split('');

    //  check the first character;
    //  is it a hash?

    return characters[0] === '#';
}