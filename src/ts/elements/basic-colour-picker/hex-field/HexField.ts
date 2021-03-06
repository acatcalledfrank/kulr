import {activeID} from "../../../state/Observables";
import {onHexFieldInput} from "./Interactions";
import {autoObservableHex} from "../../../colour/ColourMixer";
import {IInternalOptions, IKulrOptions} from "kulr";
import {dehashString} from "../../../utils/colour/Validator";
import {pickMeConstants} from "../../../constants/Constants";
import {findByRoleWithin} from "../../../utils/dom/element/Find";


/**
 * create and populate a hex string input/output field
 * @param options
 */
export function createHexField(options: IKulrOptions)
{
    //  add listeners to the field

    addListeners(<HTMLInputElement>findByRoleWithin(options.elements.selector, pickMeConstants.elements.HEX_FIELD), options);
}


/**
 * add interaction listeners to the field
 * @param field
 * @param options
 */
function addListeners(field: HTMLInputElement, options: IInternalOptions)
{
    activeID.takeUntil(options.destroy).subscribe(id => options.id === id ? activateField(field) : deactivateField(field));
}


/**
 * activate the field; start listening for relevant events
 * @param field
 */
function activateField(field: HTMLInputElement)
{
    //  subscribe to hue updates, stopping when the active id changes

    autoObservableHex.takeUntil(activeID).subscribe(hex =>
    {
        //  when the observable hex value changes, update the field contents -
        //  but only if the user is not currently editing the value by hand

        if (field !== field.ownerDocument.activeElement) field.value = dehashString(hex);
    });

    //  listen for mouse interactions

    field.addEventListener('input', onHexFieldInput);
}


/**
 * deactivate the field
 * @param field
 */
function deactivateField(field: HTMLInputElement)
{
    field.removeEventListener('input', onHexFieldInput);
}