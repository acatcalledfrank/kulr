import {IOptions} from "picky";
import * as signals from 'signals';

export class Events
{
    updateColour: Signal;

    constructor(private iid: string, private options: IOptions)
    {
        
    }


    /**
     * set up our signals;
     * these allow internal and external communication
     */
    setup()
    {
        this.updateColour = new signals.Signal();
    }
}