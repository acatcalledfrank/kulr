import {IPickMeOptions} from "../PickMe";

export class State
{
    open: boolean;

    constructor(private iid:string, private options: IPickMeOptions)
    {
        
    }
}