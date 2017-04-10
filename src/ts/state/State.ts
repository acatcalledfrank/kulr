import {IPickMeOptions} from 'pick-me';
export class State
{
    open: boolean;

    constructor(private iid:string, private options: IPickMeOptions)
    {
        
    }
}