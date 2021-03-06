import 'rxjs/add/operator/take';
import {IKulrOptions} from "kulr";
import {hslToHexString, manualObservableHex} from "../../colour/ColourMixer";
import {activeID, observableHue, observableLightness, observableSaturation} from "../../state/Observables";
import {pickMeConstants} from "../../constants/Constants";
import {findByRoleWithin} from "../../utils/dom/element/Find";


/**
 * create a "confirm" button that dispatches the current hex value of the picker
 * @param options
 */
export function createConfirmButton(options: IKulrOptions)
{
    //  find the button element

    const buttonElement: HTMLElement = findByRoleWithin(options.elements.selector, pickMeConstants.elements.CONFIRM_BUTTON);

    //  add listeners to the button

    if (buttonElement) buttonElement.addEventListener('mouseup', event => confirmPicking(event))
}


/**
 * confirm the current colour
 * @param event
 */
function confirmPicking(event: MouseEvent)
{
    //  manually update the external observable with the current colour

    manualObservableHex.next(hslToHexString(observableHue.getValue(), observableSaturation.getValue(), observableLightness.getValue()));

    //  close the colour picker

    activeID.next(null);
}