export default (prefix: string = '') =>
{
    return prefix + Math.random();
    // return prefix + new Date().getTime();
}