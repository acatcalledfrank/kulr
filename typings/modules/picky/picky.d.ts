declare module 'picky'
{
    export interface IOptions
    {
        elements:
            {
                toggle: HTMLElement | string;
                popup: HTMLElement | string;
            }
    }
    
    export class Toggle
    {
        element: HTMLElement;
        
        setup() : void;
    }
    
    export class Popup
    {
        element: HTMLElement;

        setup() : void;
        toggleVisibility() : void;
    }
    
    export class HuePane
    {
        element: SVGSVGElement;

        setup() : void;
        setHue(hue: number) : void;
    }
    
    export class TonePane
    {
        element: HTMLElement;

        setup() : void;
        setHue(hue: number) : void;
    }
    
    export class Swatch
    {
        
    }
    
    export interface IGradientStop
    {
        colour: string;
        offset: string;
    }
}