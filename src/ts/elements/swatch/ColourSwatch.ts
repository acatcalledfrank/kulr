import {toArray} from "lodash";
import {pickyConstants} from "../../constants/Constants";
import {findByRolesWithin} from "../../utils/dom/element/Find";
import {activeID} from "../../state/Observables";
import {observableHex} from "../../colour/ColourMixer";
import {IPickyOptions} from "picky";
import {elementAt} from "@reactivex/rxjs/dist/cjs/operator/elementAt";


/**
 * create and populate one or more colour-swatches to display the current colour
 * @param options
 */
export function createColourSwatches(options: IPickyOptions)
{
    //  add listeners for each swatch

    toArray(findByRolesWithin(options.elements.selector, pickyConstants.elements.SWATCH))
        .forEach(element => addListeners(element, options));
}


/**
 * add listeners to the swatch
 * @param swatch
 * @param options
 */
function addListeners(swatch: HTMLElement, options: IPickyOptions)
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

    observableHex.takeUntil(activeID).subscribe(hex => swatch.style.setProperty('background-color', hex));
}