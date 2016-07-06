import {IOptions} from "picky";
import {findOne} from "../utils/dom/element/Find";
import App from "../App";
import {toggleClass, hasClass} from "../utils/dom/style/Css";
import {Interactions} from "./Interactions";

export class Toggle
{
    element: HTMLElement;
    active: boolean;
    
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
        
        //  set iid property on element
        
        this.element.dataset['iid'] = this.iid;

        //  add interaction listeners

        this.listen();

        //  also add click-outside listeners

        new Interactions(this.iid, this.options).listen();
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
        //  listen for click events

        this.element.addEventListener('click', this.onClick);

        //  listen for app-wide events

        App.events.togglePopup.add(this.onTogglePopup);
    }


    /**
     * when the toggle is clicked, toggle the colour picker popup
     */
    onClick = (event: MouseEvent) =>
    {
        //  check current state
        
        App.state.open = ! App.state.open;
        
        //  dispatch a popup toggle event;
        //  this will tell all popups to toggle their visibility accordingly
        
        App.events.togglePopup.dispatch(this.iid);
    };


    /**
     * when a popup is opened, check the iid;
     * if it doesn't match this instance then we've opened the popup for an alternative instance
     * so let's close this popup
     * @param iid
     */
    onTogglePopup = (iid: string) =>
    {
        //  check the app's current state
        
        toggleClass(this.element, 'open', App.state.open);
    };
}