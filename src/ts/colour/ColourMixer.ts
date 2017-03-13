import {Observable} from "@reactivex/rxjs";
import {observableHue, observableSaturation, observableLightness} from "../state/Observables";
import {dehashString} from "../utils/colour/Validator";
import {IHSL} from 'pick-me';
import {hslToRgb} from './HslToRgb';
import {IRGB} from 'pick-me';


//  merge h, s and l into a single observable, then when the combined HSL is updated, parse to hex string

export const observableHex: Observable<string> = observableHue.combineLatest(observableSaturation, observableLightness, hslToHexString);


/**
 * convert an HSL object to a hex string
 * @param h
 * @param s
 * @param l
 * @return {string}
 */
function hslToHexString(h: number, s: number, l: number) : string
{
    return rgbToHex(hslToRgb({ hue: h, saturation: s, lightness: l }));
}


/**
 * convert a hex string to an HSL object
 * @param hex
 */
export function hexToHSL(hex: string) : IHSL
{
    return rgbToHsl(hexToRgb(hex));
}


/**
 * set the observable H, S and L values in a single function
 * @param hsl
 */
export function setObservableHSL(hsl: IHSL)
{
    observableSaturation.next(hsl.saturation);
    observableLightness.next(hsl.lightness);
    observableHue.next(hsl.hue);
}



/**
 * convert an RGB object to a hex string;
 * snippet from here: http://stackoverflow.com/a/5624139
 * @param rgb
 */
export function rgbToHex(rgb: IRGB) : string
{
    let hex: string;

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
    let bigint: number,
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


/**
 * expand a shorthand hex colour (eg #fff)
 * into a full six-figure one;
 * code from here: http://stackoverflow.com/a/5624139
 * @param hex
 */
export function expandShortHexCode(hex: string) : string
{
    let regexp: RegExp;

    //  create reg exp

    regexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    //  run hex code through reg exp and return

    return hex.replace(regexp, (m, r, g, b) => r + r + g + g + b + b);
}