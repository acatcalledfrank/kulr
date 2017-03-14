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
    export function getColourPicker(id: string) : IPickMeInstance;
    export function updateColourPicker(id: string, input: string) : void;
    export function closeAllColourPickers() : void;

    export interface IGradientStop
    {
        colour: string;
        offset: string;
        opacity?: string;
    }

    export interface IHSL
    {
        h: number;
        s: number;
        l: number;
    }

    export interface IRGB
    {
        r: number;
        g: number;
        b: number;
    }
}