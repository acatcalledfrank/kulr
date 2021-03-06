import {findByRoleWithin} from "../../../utils/dom/element/Find";
import {activeID} from "../../../state/Observables";
import {pickMeConstants} from "../../../constants/Constants";
import {IKulrOptions} from "kulr";


/**
 * create and populate the toggle button
 * @param options
 */
export function createToggle(options: IKulrOptions)
{
    //  find the button element

    const element: HTMLElement = findByRoleWithin(options.elements.selector, pickMeConstants.elements.TOGGLE);

    //  and add listeners

    element.addEventListener('click', event => onToggleClick(event, options));

    //  listen for active id changes

    activeID.subscribe(id => setActiveState(element, options.id === id));
}


/**
 * when the user clicks the toggle, show or hide the colour picker popup
 * @param event
 * @param options
 */
let onToggleClick = (event: MouseEvent, options: IKulrOptions) =>
{
    //  update the observable with the new active ID

    activeID.next( ! getActiveState(<HTMLElement>event.currentTarget) ? options.id : null);
};


/**
 * test and return the toggle's state
 * @param element
 * @return {boolean}
 */
function getActiveState(element: HTMLElement) : boolean
{
    return element.dataset['active'] === 'true';
}


/**
 * get the toggle's active data-attribute
 * @param element
 * @param value
 */
function setActiveState(element: HTMLElement, value: boolean) : boolean
{
    //  set the new value

    element.dataset['active'] = value.toString();

    //  return the value

    return value;
}