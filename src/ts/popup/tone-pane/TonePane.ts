import {IOptions, IGradientStop} from "picky";

import {Find} from "../../utils/dom/element/Find";
import App from "../../App";
import Css from "../../utils/dom/style/Css";
import CreateGradientElement from "../svg/CreateGradientElement";
import SetGradientDirection from "../svg/SetGradientDirection";
import FillGradient from "../svg/FillGradient";
import CreateColourRect from "../svg/CreateColourRect";
import UniqueId from '../../utils/UniqueId';
import {Interactions} from './Interactions';

export class TonePane
{
    element: SVGSVGElement;

    constructor(private options: IOptions)
    {

    }


    /**
     * set up the toggle button;
     * this is what the user will click to open/close the colour picker popup
     */
    setup()
    {
        //  get the specified element for the toggle button

        this.element = this.getElement();

        //  create rectangle element and fill with the gradient

        CreateColourRect(this.element, this.drawGradient('#ffffff', ['0', '0', '100%', '0']));
        CreateColourRect(this.element, this.drawGradient('#000000', ['0', '100%', '0', '0']));

        //  add interaction listeners to the element

        new Interactions(this.element).listen();
    }


    /**
     * get the element for the toggle
     */
    getElement()
    {
        return this.createElement();
    }


    /**
     * create the element for the hue pane
     */
    createElement() : SVGSVGElement
    {
        var element: SVGSVGElement;

        //  create the new element

        element = <SVGSVGElement>document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        //  add the relevant class

        Css.addClass(element, 'picky-tone-pane');

        //  append the new element to the popup element

        App.popup.element.appendChild(element);

        //  return the new element

        return element;
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

        id = UniqueId('picky-svg-gradient-');

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
     * set the currently selected hue
     * @param hue
     */
    setHue(hue: number)
    {
        console.log('settin hude')

        this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    }
}