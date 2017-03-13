declare module 'picky'
{
    export interface IPickyOptions
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
        [id: string]: IPickyInstance;
    }

    export interface IPickyInstance
    {
        // id: string;

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