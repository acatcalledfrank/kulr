/**
 * clamp a number between min and max values
 * @param n
 * @param min
 * @param max
 * @returns {number}
 */
export function clamp(n: number, min: number, max: number)
{
    return Math.max(min, Math.min(n, max));
}