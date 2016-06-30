import {IOptions} from "picky";
import {findOne} from "../../utils/dom/element/Find";
import App from "../../App";

export class Swatch
{
    element: HTMLElement;

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
        
        //  do we have an element?
        //  if not then the user probably hasn't supplied a selector,
        //  which means we don't need a swatch

        if ( ! this.element) return;

        //  listen for signals

        App.events.updateColour.add(this.onColourSet);
    }


    /**
     * find the swatch element, if one exists
     */
    getElement() : HTMLElement
    {
        return findOne(this.options.elements.swatch);
    }


    /**
     * when the selected colour changes,
     * display it in the swatch
     */
    onColourSet = () =>
    {
        this.element.style.backgroundColor = App.palette.getHexString();
    }
}