import {IOptions} from "picky";

import {Find} from "../utils/dom/element/Find";
import App from "../App";
import Css from "../utils/dom/style/Css";

export class HuePane
{
    element: HTMLElement;

    constructor(private options: IOptions)
    {

    }


    /**
     * set up the toggle button;
     * this is what the user will click to open/close the colour picker popup
     */
    setup()
    {
        //  get the specified element for the toggle button

        this.element = this.getElement();

        //  draw a gradient across our svg

        this.drawGradient();
    }


    /**
     * get the element for the toggle
     */
    getElement()
    {
        return this.createElement();
    }


    /**
     * create the element for the hue pane
     */
    createElement() : HTMLElement
    {
        var element: HTMLElement;
        
        //  create the new element
        
        element = document.createElement('svg');
        
        //  add the relevant class
        
        Css.addClass(element, 'picky-hue-pane');
        
        //  append the new element to the popup element
        
        App.popup.element.appendChild(element);
        
        //  return the new element
        
        return element;
    }


    /**
     * draw a rainbow gradient in the hue panel
     */
    drawGradient()
    {
        
    }
}