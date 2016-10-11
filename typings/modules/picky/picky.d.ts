declare module 'picky'
{
    export class ColourPicker
    {
        constructor(options: IOptions);

        onUpdate: Signal;
        hex: string;
    }

    export interface IOptions
    {
        elements:
            {
                toggle: HTMLElement | string;
                popup: HTMLElement | string;
                tone_pane: HTMLElement | string;
                hue_pane: HTMLElement | string;
                swatches: (HTMLElement | string)[];
                text_input: HTMLElement | string;
            },
        defaultColour: string;
    }

    export class State
    {
        open: boolean;
        dragging: boolean;
    }

    export class Events
    {
        updateColour: Signal;
        togglePopup: Signal;

        setup() : void;
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
        setSaturation(saturation: number) : void;
        setLightness(lightness: number) : void;
    }
    
    export class ColourMixer
    {
        
    }
    
    export interface ISwatch
    {
        iid: string;
        element: HTMLElement;

        setup() : void;
    }
    
    export class TextInput
    {
        setup() : void;
    }
    
    export class ColourPalette
    {
        hsl: IHSL;
        rgb: IRGB;

        setup() : void;

        setHue(hue: number) : void;
        setSaturation(saturation: number) : void;
        setLightness(lightness: number) : void;
        setRgb(rgb: IRGB | string) : void;
        getHsl(): IHSL;
        getRgb(): IRGB;
        getHexString(): string;
        setHexString(hex: string) : void;
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
    
    // export interface ICombinedColour
    // {
    //     hue: number;
    //     saturation?: number;
    //     lightness?: number;
    //     rgb?: string;
    // }
    
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