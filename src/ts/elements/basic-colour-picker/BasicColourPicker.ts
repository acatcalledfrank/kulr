import {createTonePane} from "./tone-pane/TonePane";
import {createHuePane} from "./hue-pane/HuePane";
import {IPickyOptions} from "picky";
import {findByRoleWithin} from "../../utils/dom/element/Find";
import {createHexField} from "./hex-field/HexField";
import {createColourSwatches} from "../swatch/ColourSwatch";
import {activeID} from "../../state/Observables";
import {createToggle} from "./toggle/Toggle";
import {pickyConstants} from "../../constants/Constants";



/**
 * create a basic colour picker
 * @param options
 */
export function createBasicColourPicker(options: IPickyOptions)
{
    //  populate the toggle button

    createToggle(options);

    //  create the popup elements

    createPopup(options);

    //  add listeners

    addListeners(options);
}


/**
 * create the popup elements
 * @param options
 */
function createPopup(options: IPickyOptions)
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
function addListeners(options: IPickyOptions)
{
    activeID.subscribe(id => toggleDisplay(options, options.id === id));
}


/**
 * toggle the display of the popup
 * @param options
 * @param active
 */
function toggleDisplay(options: IPickyOptions, active: boolean)
{
    let element: HTMLElement,
        display: string;

    //  find the popup element for these options

    element = findByRoleWithin(options.elements.selector, pickyConstants.elements.POPUP);

    //  if the associated instance is not currently active, hide the popup and stop here

    if ( ! active) return element.style.setProperty('display', 'none');

    //  if the

    element.style.setProperty('display', ( ! active || element.style.display !== 'block') ? 'block' : 'none');
}