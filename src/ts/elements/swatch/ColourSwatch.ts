import {toArray} from "lodash";
import {pickMeConstants} from "../../constants/Constants";
import {findByRolesWithin} from "../../utils/dom/element/Find";
import {activeID} from "../../state/Observables";
import {autoObservableHex} from "../../colour/ColourMixer";
import {IPickMeOptions} from "pick-me";


/**
 * create and populate one or more colour-swatches to display the current colour
 * @param options
 */
export function createColourSwatches(options: IPickMeOptions)
{
    //  add listeners for each swatch

    toArray(findByRolesWithin(options.elements.selector, pickMeConstants.elements.SWATCH))
        .forEach(element => addListeners(element, options));
}


/**
 * add listeners to the swatch
 * @param swatch
 * @param options
 */
function addListeners(swatch: HTMLElement, options: IPickMeOptions)
{
    activeID.filter(id => options.id === id).subscribe(id => activateSwatch(swatch));
}


/**
 * activate the field; start listening for relevant events
 * @param swatch
 */
function activateSwatch(swatch: HTMLElement)
{
    //  subscribe to hue updates, stopping when the active id changes

    autoObservableHex.takeUntil(activeID).subscribe(hex => swatch.style.setProperty('background-color', hex));
}