declare module "kulr"
{
    import {Subject} from 'rxjs/Subject';

    export interface IKulrOptions
    {
        id: string;
        elements:
            {
                selector: HTMLElement | string;
            },
        actions?:
            {
                liveUpdate?: boolean;
            }
        defaultColour: string;
    }

    export interface IInternalOptions extends IKulrOptions
    {
        destroy?: Subject<boolean>;
    }

    export interface IInstanceDictionary
    {
        [id: string]: IKulrInstance;
    }

    export interface IKulrInstance
    {
        options: IKulrOptions;
        observableColour:
            {
                subscribe: (callback: (hex: string) => void) => void;
            }

        bootstrap() : void;
        setColour(input: string) : void;
        destroy() : void;
    }

    export function createColourPicker(colourPickerOptions: IKulrOptions) : IKulrInstance;
    export function getColourPicker(id: string) : IKulrInstance;
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