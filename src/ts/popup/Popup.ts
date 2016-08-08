import {IOptions} from "picky";
import {findOne} from "../utils/dom/element/Find";
import App from "../App";
import {HuePane} from "./hue-pane/HuePane";
import {TonePane} from "./tone-pane/TonePane";
import {Swatch} from "./swatch/Swatch";
import {TextInput} from "./text-input/TextInput";
import {toggleClass, removeClass} from "../utils/dom/style/Css";
import {addClass} from "../utils/dom/style/Css";
import {hideElement} from '../utils/dom/style/ShowElement';


export class Popup
{
    element: HTMLElement;
    
    constructor(private iid:string, private options: IOptions)
    {
        
    }
    
    
    /**
     * set up the colour picker popup;
     * this displays the colour selection to pick from
     */
    setup()
    {
        //  create the popup element
        
        this.element = this.getElement();

        //  hide the popup element; sometimes it gets created before the CSS kicks in, and this will prevent a flicker of colour

        hideElement(this.element);
        
        //  set iid property on element

        this.element.dataset['iid'] = this.iid;
        
        //  create the hue and tint colour panes class instances
        
        App.swatch = new Swatch(this.iid, this.options);
        App.textInput = new TextInput(this.iid, this.options);
        App.tonePane = new TonePane(this.iid, this.options);
        App.huePane = new HuePane(this.iid, this.options);

        //  setup colour panes
        
        App.swatch.setup();
        App.textInput.setup();
        App.tonePane.setup();
        App.huePane.setup();

        //  add interaction listeners to the element

        this.listen();
    }


    /**
     * get the element for the popup
     */
    getElement()
    {
        var element: HTMLElement;

        //  if the user has provided a selector for the popup,
        //  let's try to find the element
        //  and use it if we find something
        
        element = findOne(this.options.elements.popup);
        
        if (element) return element;
        
        //  if nothing's found then let's create a new popup element inside the toggle button
        
        return this.createElement();
    }


    /**
     * create the popup element with the targeted toggle element
     */
    createElement() : HTMLElement
    {
        var element: HTMLElement;

        //  create a new popup element

        element = document.createElement('div');
        
        //  add class to the popup
        
        addClass(element, 'picky-popup');

        //  place our new element on the page;
        //  this code inserts it after the toggle element

        App.toggle.element.parentNode.insertBefore(element, App.toggle.element.nextSibling);
        
        return element;
    }


    /**
     * listen for open-popup events
     */
    listen()
    {
        App.events.togglePopup.add(this.onTogglePopup);
    }


    /**
     * toggle popup visibility
     */
    onTogglePopup = (iid: string) =>
    {
        //  if the iids of the event doesn't match this popup,
        //  the user has opened a different instance -
        //  let's close this instance's popup

        if (iid !== this.iid)
        {
            removeClass(this.element, 'open');

            return;
        }

        //  if they do match, check the app's "open" status
        //  and set the class accordingly

        toggleClass(this.element, 'open', App.state.open);
    }
}