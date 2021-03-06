import {IHSL} from "kulr";
import {observableHue, observableSaturation, observableLightness} from "../../../state/Observables";
import {inputToHSL} from '../../../colour/ColourMixer';


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
    let input: string,
        hsl: IHSL;

    //  get the input element from the event

    try
    {
        input = (<HTMLInputElement>event.target).value;
    }
    catch(e)
    {
        input = '';
    }

    //  convert the hex string to HSL

    hsl = inputToHSL(input);

    //  set observable H, S and L values

    observableHue.next(hsl.h);
    observableSaturation.next(hsl.s);
    observableLightness.next(hsl.l);
}


/**
 * @param event
 */
export function onHexFieldBlur(event: MouseEvent)
{

}