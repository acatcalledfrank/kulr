declare module "pick-me"
{
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
        observableColour:
            {
                subscribe: (callback: (hex: string) => void) => void;
            }

        bootstrap() : void;
        destroy() : void;
    }

    export function createColourPicker(colourPickerOptions: IPickMeOptions) : IPickMeInstance;

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