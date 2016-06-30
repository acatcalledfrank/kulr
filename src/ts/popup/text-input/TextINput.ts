import {IOptions} from "picky";
import {findOne} from "../../utils/dom/element/Find";
import App from "../../App";
import {Interactions} from "./Interaction";

export class TextInput
{
    element: HTMLInputElement;

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
     * display it in the swatch
     */
    onColourSet = () =>
    {
        this.element.value = App.palette.getHexString();
    }
}