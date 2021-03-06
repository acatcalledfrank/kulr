/**
 * create a unique ID
 * @param prefix
 * @returns {string}
 */
export function getUniqueId(prefix: string = '') : string
{
    return prefix + Math.random() * 10;
}