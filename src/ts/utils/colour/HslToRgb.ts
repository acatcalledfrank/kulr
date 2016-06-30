//  described here https://github.com/d3/d3-color/blob/master/src/color.js


import {IRGB} from "picky";

/**
 * convert an HSL colour to an RGB numeric array;
 * h, s and l should all be between 0-1
 * 
 * code filched from here:
 * https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
 * @param h
 * @param s
 * @param l
 * @returns {number[]}
 */
export function hslToRgb(h: number, s: number, l: number) : IRGB
{
    var r: number,
        g: number,
        b: number;

    //  check the saturation

    if (s === 0)
    {
        //  if it's zero then the colour is a shade of grey,
        //  and r, g and b will be equal to the lightness/luminance

        r = g = b = l;
    }
    else
    {
        var q: number,
            p: number;

        //  magic numbers make pretty colours

        q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        p = 2 * l - q;

        r = hueToRgb(p, q, h + 1/3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1/3);
    }

    //  multiply colours by 255 and round

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    //  return colours as an RGB object

    return { r: r, g: g, b: b };
}


/**
 * convert a hue to rgb
 * @param p
 * @param q
 * @param t
 * @returns {number}
 */
function hueToRgb(p: number, q: number, t: number) : number
{
    if(t < 0) t += 1;
    if(t > 1) t -= 1;
    if(t < 1/6) return p + (q - p) * 6 * t;
    if(t < 1/2) return q;
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;

    return p;
}