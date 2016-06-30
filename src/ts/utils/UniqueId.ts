export function getUniqueId(prefix: string = '') : string
{
    return prefix + Math.random() * 10;
    // return prefix + new Date().getTime();
}