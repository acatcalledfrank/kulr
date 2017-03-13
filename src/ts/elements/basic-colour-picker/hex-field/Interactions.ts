import {IHSL} from "picky";
import {hexToRgb, rgbToHsl} from "../../../colour/ColourMixer";
import {observableHue, observableSaturation, observableLightness} from "../../../state/Observables";
/**
 * @param event
 */
export function onHexFieldFocus(event: MouseEvent)
{

}


/**
 * when the user enters text into the field, try to interpret it as a colour
 * @param event
 */
export function onHexFieldInput(event: MouseEvent)
{
    let hex: string,
        hsl: IHSL;

    //  get the input element from the event

    try
    {
        hex = (<HTMLInputElement>event.target).value;
    }
    catch(e)
    {
        hex = '';
    }

    //  convert the hex string to HSL

    hsl = rgbToHsl(hexToRgb(hex));

    //  set observable H, S and L values

    observableHue.next(hsl.hue);
    observableSaturation.next(hsl.saturation);
    observableLightness.next(hsl.lightness);
}


/**
 * @param event
 */
export function onHexFieldBlur(event: MouseEvent)
{

}