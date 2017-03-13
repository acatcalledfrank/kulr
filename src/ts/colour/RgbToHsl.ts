import {IHSL, IRGB} from "picky";


/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * taken from: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
 *
 * @return  {{hue: number, saturation: number, lightness: number}}           The HSL representation
 * @param rgb
 */
export function rgbToHsl(rgb: IRGB) : IHSL
{
    let max: number,
        min: number,
        r: number,
        g: number,
        b: number,
        h: number,
        s: number,
        l: number,
        d: number;

    //  convert values to between 0-1

    r = rgb.r / 255;
    g = rgb.g / 255;
    b = rgb.b / 255;

    // *waves hands*

    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = s = l = (max + min) / 2;

    if (max == min)
    {
        h = s = 0; // achromatic
    }
    else
    {
        d = max - min;

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch(max)
        {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { hue: h, saturation: s, lightness: l };
}