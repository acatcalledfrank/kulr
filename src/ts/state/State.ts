import {IPickyOptions} from "picky";

export class State
{
    open: boolean;

    constructor(private iid:string, private options: IPickyOptions)
    {
        
    }
}