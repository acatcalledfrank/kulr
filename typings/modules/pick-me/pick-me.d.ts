declare module "pick-me"
{
    import {Observable} from '@reactivex/rxjs';

    export interface IPickMeOptions
    {
        id: string;
        elements:
            {
                selector: HTMLElement | string;
            },
        defaultColour: string;
    }

    export interface IInstanceDictionary
    {
        [id: string]: IPickMeInstance;
    }

    export interface IPickMeInstance
    {
        options: IPickMeOptions;
        observableColour: Observable<string>

        bootstrap() : void;
        destroy() : void;
    }
    
    export interface IGradientStop
    {
        colour: string;
        offset: string;
        opacity?: string;
    }
    
    export interface IHSL
    {
        hue: number;
        saturation: number;
        lightness: number;
    }
    
    export interface IRGB
    {
        r: number;
        g: number;
        b: number;
    }
}