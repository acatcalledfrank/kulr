import {createToggle} from "./basic-colour-picker/toggle/Toggle";
import {createBasicColourPicker} from "./basic-colour-picker/BasicColourPicker";
import {IPickyOptions} from "picky";


/**
 * add all required picky elements to the page
 * @param options
 */
export function addPickyElements(options: IPickyOptions)
{
    //  populate the toggle button

    createToggle(options);

    //  create and populate the colour picker popup

    createBasicColourPicker(options);
}


