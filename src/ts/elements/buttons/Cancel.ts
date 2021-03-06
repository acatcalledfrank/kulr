import 'rxjs/add/operator/take';
import {IKulrOptions} from "kulr";
import {inputToHSL, autoObservableHex, setObservableHSL} from "../../colour/ColourMixer";
import {activeID} from "../../state/Observables";
import {pickMeConstants} from "../../constants/Constants";
import {findByRoleWithin} from "../../utils/dom/element/Find";

let savedHex: string;


/**
 * create a "cancel" button that restores the initial colour
 * @param options
 */
export function createCancelButton(options: IKulrOptions)
{
    //  listen for relevant observable events

    addListeners(options);

    //  find the button element

    const buttonElement: HTMLElement = findByRoleWithin(options.elements.selector, pickMeConstants.elements.CANCEL_BUTTON);

    //  add listeners to the button

    if (buttonElement) buttonElement.addEventListener('mouseup', event => cancelPicking(event));
}

/**
 * add interaction listeners to the pane
 * @param options
 */
function addListeners(options: IKulrOptions)
{
    //  when the active ID changes, grab the initial hex value and save it

    activeID.delay(150).subscribe(id =>
    {
        if (options.id === id) autoObservableHex.take(1).subscribe(hex => savedHex = hex);
    })
}


/**
 * cancel colour picking, restore the first colour and close the picker
 * @param event
 */
function cancelPicking(event: MouseEvent)
{
    //  restore the saved colour

    setObservableHSL(inputToHSL(savedHex));

    //  close the colour picker

    activeID.next(null);
}