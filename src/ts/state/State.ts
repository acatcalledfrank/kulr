import {IOptions} from "picky";

export class State
{
    open: boolean;
    dragging: boolean;
    
    constructor(private iid:string, private options: IOptions)
    {
        
    }
}