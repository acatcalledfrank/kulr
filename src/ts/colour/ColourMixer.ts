import * as tinycolor from "tinycolor2";
import {observableHue, observableSaturation, observableLightness} from "../state/Observables";
import {IHSL} from 'kulr';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

//  merge h, s and l into a single observable, then when the combined HSL is updated, parse to hex string

export const autoObservableHex: Observable<string> = observableHue.combineLatest(observableSaturation, observableLightness, hslToHexString);
export const manualObservableHex: Subject<string> = new Subject();


/**
 * convert an HSL object to a hex string
 * @param h
 * @param s
 * @param l
 * @return {string}
 */
export function hslToHexString(h: number, s: number, l: number) : string
{
    return tinycolor({ h: h, s: s, l: l }).toHexString();
}


/**
 * convert a hex string to an HSL object
 * @param hex
 */
export function inputToHSL(hex: string) : IHSL
{
    return tinycolor(hex).toHsl();
}


/**
 * set the observable H, S and L values in a single function
 * @param hsl
 */
export function setObservableHSL(hsl: IHSL)
{
    observableSaturation.next(hsl.s);
    observableLightness.next(hsl.l);
    observableHue.next(hsl.h);
}