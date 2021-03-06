import {createTonePane} from "./tone-pane/TonePane";
import {createHuePane} from "./hue-pane/HuePane";
import {IInternalOptions, IKulrOptions} from "kulr";
import {findByRoleWithin} from "../../utils/dom/element/Find";
import {createHexField} from "./hex-field/HexField";
import {createColourSwatches} from "../swatch/ColourSwatch";
import {activeID} from "../../state/Observables";
import {createToggle} from "./toggle/Toggle";
import {pickMeConstants} from "../../constants/Constants";
import {createConfirmButton} from "../buttons/Confirm";
import {createCancelButton} from "../buttons/Cancel";



/**
 * create a basic colour picker
 * @param options
 */
export function createBasicColourPicker(options: IKulrOptions)
{
    //  populate the toggle button

    createToggle(options);

    //  create the popup elements

    createPopup(options);

    //  add listeners

    addListeners(options);

    //  add confirm and cancel buttons

    createConfirmButton(options);
    createCancelButton(options);
}



/**
 * create the popup elements
 * @param options
 */
function createPopup(options: IKulrOptions)
{
    //  create popup components

    createTonePane(options);
    createHuePane(options);

    //  create colour swatch and text input

    createColourSwatches(options);
    createHexField(options);
}


/**
 * listen for signals
 * @param options
 */
function addListeners(options: IInternalOptions)
{
    //  subscribe to the active instance id observable; we'll use this to show/hide the popup

    activeID.takeUntil(options.destroy).subscribe(id => toggleDisplay(options, options.id === id));
}


/**
 * toggle the display of the popup
 * @param options
 * @param active
 */
function toggleDisplay(options: IKulrOptions, active: boolean)
{
    //  find the popup element for these options

    const element: HTMLElement = findByRoleWithin(options.elements.selector, pickMeConstants.elements.POPUP);

    //  if the associated instance is not currently active, hide the popup and stop here

    if ( ! active) return element.style.setProperty('display', 'none');

    //  if the

    element.style.setProperty('display', ( ! active || element.style.display !== 'block') ? 'block' : 'none');
}