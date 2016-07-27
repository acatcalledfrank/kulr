import {IOptions, IGradientStop} from "picky";

import App from "../../App";
import {IRGB} from "picky";
// import {isRgbString} from "./Validator";
import {IHSL} from "picky";
import {hslToRgb} from "./HslToRgb";
import {rgbToHex, hexToRgb} from "./RgbToString";
import {rgbToHsl} from "./RgbToHsl";

export class ColourPalette
{
    element: SVGSVGElement;
    hsl: IHSL;
    rgb: IRGB;

    constructor(private iid: string, private options: IOptions)
    {

    }


    /**
     * set up palette instance
     */
    setup()
    {
        //  set base colour values
        
        this.hsl = { hue: 0, saturation: 0, lightness: 0 };
        this.rgb = { r: 0, g: 0, b: 0 };
    }
    

    /**
     * set the currently selected hue
     * @param hue
     */
    setHue(hue: number)
    {
        this.hsl.hue = hue;
        // this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    }


    /**
     * set the current saturation
     * @param saturation
     * @param lightness
     */
    setSaturation(saturation: number)
    {
        this.hsl.saturation = saturation;
    }


    /**
     * set the current lightness
     * @param lightness
     */
    setLightness(lightness: number)
    {
        this.hsl.lightness = lightness;
    }


    /**
     * set the current rgb colour
     */
    setRgb(rgb: IRGB | string)
    {
        // if (isRgbString(rgb))
        // {
        //
        // }
    }


    /**
     * combine H, S and L into a single colour
     */
    getHsl() : IHSL
    {
        return this.hsl;
    }


    /**
     * combine H, S and L into a single colour
     */
    getRgb() : IRGB
    {
        return hslToRgb(this.hsl.hue, this.hsl.saturation, this.hsl.lightness);
    }


    /**
     * get the current rgb colour as a string, eg #330034
     * @returns {null}
     */
    getHexString(): string
    {
        return rgbToHex(this.getRgb());
    }


    /**
     * set the current colour by hex string
     * @returns {null}
     */
    setHexString(hex: string)
    {
        var hsl: IHSL;

        //  convert hex string to HSL

        this.hsl = rgbToHsl( hexToRgb(hex));

        //  dispatch a colour update event

        App.events.updateColour.dispatch( App.palette.getHexString());
    }
}