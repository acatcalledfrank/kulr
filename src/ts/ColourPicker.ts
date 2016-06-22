/// <reference path="../../typings/index.d.ts" />

import {IOptions} from 'picky';

import {Popup} from "./popup/Popup";
import {Toggle} from "./toggle/Toggle";
import App from "./App";
import {PositionTracker} from "./popup/PositionTracker";

export class ColourPicker
{
    element: HTMLElement;

    constructor(options: IOptions)
    {
        console.log('new picky!');

        this.setup(options);
    }
    
    
    /**
     * setup a new instance
     */
    setup(options: IOptions)
    {
        //  create class instances for our various colour picker components
        
        App.popup = new Popup(options);
        App.toggle = new Toggle(options);
        App.positionTracker = new PositionTracker(options);
        
        //  initialise instances
        
        App.toggle.setup();
        App.popup.setup();
    }


    /**
     * destroy this instance
     */
    destroy()
    {

    }
}
