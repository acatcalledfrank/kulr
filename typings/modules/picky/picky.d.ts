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
        element: SVGSVGElement;

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
        opacity?: string;
    }
    
    export class PositionTracker
    {
        startTracking(event: MouseEvent, trackFunc: (event: MouseEvent) => void) : void;
        stopTracking() : void;
    }
}