import {IOptions, IGradientStop} from "picky";

import {} from "../../utils/dom/element/Find";
import App from "../../App";
import Css from "../../utils/dom/style/Css";
import CreateGradientElement from "../svg/CreateGradientElement";
import SetGradientDirection from "../svg/SetGradientDirection";
import FillGradient from "../svg/FillGradient";
import CreateColourRect from "../svg/CreateColourRect";
import {Interactions} from './Interactions';
import {getUniqueId} from "../../utils/UniqueId";
import {IHSL} from "picky";
import {ColourPalette} from "picky";
import {findOne} from "../../utils/dom/element/Find";
import {fillContainer} from "../../utils/dom/style/FillContainer";

export class TonePane
{
    element: SVGSVGElement;

    constructor(private iid:string, private options: IOptions)
    {

    }


    /**
     * set up the toggle button;
     * this is what the user will click to open/close the colour picker popup
     */
    setup()
    {
        //  get the specified element for the toggle button

        this.element = this.createGradientElement();

        //  create rectangle element and fill with the gradient

        CreateColourRect(this.element, this.drawGradient('#ffffff', ['0', '0', '100%', '0']));
        CreateColourRect(this.element, this.drawGradient('#000000', ['0', '100%', '0', '0']));

        //  add interaction listeners to the element

        new Interactions(this.iid, this.element).listen();

        //  listen for signals

        App.events.updateColour.add(this.onColourSet);
    }


    /**
     * create the element for the tone pane
     */
    createGradientElement() : SVGSVGElement
    {
        var element: SVGSVGElement;

        //  create the new element

        element = <SVGSVGElement>document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        //  add the relevant class

        Css.addClass(element, 'picky-tone-pane__palette');
        
        //  make the element fill its container

        fillContainer(element);

        //  append the new element to the popup element

        this.getContainer().appendChild(element);

        //  return the new element

        return element;
    }


    /**
     * find the container element for the gradient
     */
    getContainer() : HTMLElement
    {
        return findOne(this.options.elements.tone_pane);
    }


    /**
     * draw a gradient in the tone panel
     */
    drawGradient(fill: string, direction: string[]) : string
    {
        var id: string,
            gradient: SVGGradientElement,
            stops: IGradientStop[];

        //  create a unique id for the gradient

        id = getUniqueId('picky-svg-gradient-');

        //  set the colours we're going to use in the gradient

        stops =
            [
                {
                    colour: fill,
                    offset: '0%'
                },
                {
                    colour: fill,
                    opacity: '0',
                    offset: '100%'
                }
            ];

        //  create a gradient within the svg element

        gradient = CreateGradientElement(this.element, id);

        //  set the gradient direction

        SetGradientDirection(gradient, direction);

        //  populate the gradient with the required colours

        FillGradient(gradient, stops);

        //  return the gradient's id

        return id;
    }


    /**
     * when the active colour is changed,
     * reflect that colour in the UI
     */
    onColourSet = () =>
    {
        //  the hue is provided

        this.setHue(App.palette.hsl.hue * 360);
        
        //if (colour.hue) this.setHue(colour.hue);
        // if (colour.saturation) this.setSaturation(colour.saturation);
        // if (colour.lightness) this.setLightness(colour.lightness);
    };


    /**
     * set the visible hue in the tone pane element
     * @param hue
     */
    setHue(hue: number)
    {
        this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    }


    /**
     * set the current saturation
     * @param saturation
     * @param lightness
     */
    setSaturation(saturation: number)
    {
        
    }


    /**
     * set the current lightness
     * @param lightness
     */
    setLightness(lightness: number)
    {
        
    }


    /**
     * combine H, S and L into a single colour
     */
    getCombinedHSLColour()
    {
        
    }
}