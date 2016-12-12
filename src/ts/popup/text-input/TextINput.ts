import {IOptions} from "picky";
import {findOne} from "../../utils/dom/element/Find";
import App from "../../App";
import {Interactions} from "./Interaction";

export class TextInput
{
    element: HTMLInputElement;
    debounce: number;

    constructor(private iid: string, private options: IOptions)
    {

    }


    /**
     * set up the colour swatch instance;
     * this displays the colour that the user has currently selected
     */
    setup()
    {
        //  create the popup element

        this.element = this.getElement();
        
        //  do we have an input element?
        //  if not, stop here
        
        if ( ! this.element) return;
        
        //  add interaction listeners to the element

        new Interactions(this.element).listen();

        //  listen for signals

        App.events.updateColour.add(this.onColourSet);
    }


    /**
     * find the swatch element, if one exists
     */
    getElement() : HTMLInputElement
    {
        return <HTMLInputElement>findOne(this.options.elements.text_input);
    }


    /**
     * when the selected colour changes,
     * display it in the swatch after a short delay
     */
    onColourSet = () =>
    {
        //  clear the delay, if there is one

        if (this.debounce) clearTimeout(this.debounce);

        this.debounce = setTimeout(() =>
        {
            //  set input text content to reflect the user's chosen colour

            this.element.value = App.palette.getHexString();

            //  clear the debounce value

            this.debounce = null;
        }, 500);
    }
}