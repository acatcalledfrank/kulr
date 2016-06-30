import {IRGB} from "picky";
import {prefixString} from "../string/StringUtils";
import {dehashString} from "./Validator";


/**
 * convert an RGB object to a hex string;
 * snippet from here: http://stackoverflow.com/a/5624139
 * @param rgb
 */
export function rgbToHex(rgb: IRGB) : string
{
    var hex: string;
    
    //  convert RGB to hex
    
    hex = ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1); 
    
    //  add hash and return the string
    
    return '#' + hex;
}



/**
 * convert a hex string into an RGB object;
 * taken from here: http://stackoverflow.com/a/11508164
 * @param hex
 */
export function hexToRgb(hex: string) : IRGB
{
    var bigint: number,
        r: number,
        g: number,
        b: number;
    
    //  expand a shorthand hex code if required

    hex = dehashString(expandShortHexCode(hex));

    //  parse the hex string into R/G/B values
    
    bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;

    //  return RGB object
    
    return { r: r, g: g, b: b };
}


/**
 * expand a shorthand hex colour (eg #fff)
 * into a full six-figure one;
 * code from here: http://stackoverflow.com/a/5624139
 * @param hex
 */
export function expandShortHexCode(hex: string) : string
{
    var regexp: RegExp;

    //  create reg exp

    regexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    //  run hex code through reg exp and return

    return hex.replace(regexp, function(m, r, g, b)
    {
        return r + r + g + g + b + b;
    });
}