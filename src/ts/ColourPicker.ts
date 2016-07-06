/// <reference path="../../typings/index.d.ts" />

import {IOptions} from 'picky';
import * as picky from 'picky';
import {Popup} from "./popup/Popup";
import {Toggle} from "./toggle/Toggle";
import App from "./App";
import {getUniqueId} from "./utils/UniqueId";
import {ColourPalette} from "./utils/colour/ColourPalette";
import {Events} from "./events/Events";
import {State} from "./state/State";

export class ColourPicker
{
    iid: string;
    element: HTMLElement;

    constructor(options: IOptions)
    {
        console.log('new picky!');

        //  set up this instance

        this.setup(options);
    }

    
    
    /**
     * setup a new instance
     */
    setup(options: IOptions)
    {
        //  generate a unique ID for this instance

        this.iid = getUniqueId('picky-');

        //  create class instances for our various colour picker components
        
        App.state = new State(this.iid, options);
        App.events = new Events(this.iid, options);
        App.palette = new ColourPalette(this.iid, options);
        App.popup = new Popup(this.iid, options);
        App.toggle = new Toggle(this.iid, options);
        
        //  initialise instances
        
        App.events.setup();
        App.palette.setup();
        App.toggle.setup();
        App.popup.setup();
    }


    /**
     * shortcut to properties for external access
     * @returns {picky.Events}
     */
    get onUpdate() : Signal
    {
        return App.events.updateColour;
    }
    get hex() : string
    {
        return App.palette.getHexString();
    }


    /**
     * destroy this instance
     */
    destroy()
    {

    }
}
