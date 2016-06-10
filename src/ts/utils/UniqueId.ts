export default (prefix: string = '') =>
{
    return prefix + new Date().getTime();
}