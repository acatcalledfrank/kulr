import {IOptions} from "picky";
import {findOne} from "../utils/dom/element/Find";
import App from "../App";

export class Toggle
{
    element: HTMLElement;
    
    constructor(private iid:string, private options: IOptions)
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

        //  add interaction listeners

        this.listen();
    }


    /**
     * get the element for the toggle
     */
    getElement()
    {
        return findOne(this.options.elements.toggle);
    }


    /**
     * listen for interactions and events
     */
    listen()
    {
        this.element.addEventListener('click', (event: MouseEvent) => App.popup.toggleVisibility());
    }
}