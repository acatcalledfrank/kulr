import {IOptions} from "picky";

import {Find} from "../utils/dom/element/Find";
import App from "../App";
import Css from "../utils/dom/style/Css";
import CreateGradientElement from "./svg/CreateGradientElement";
import FillGradient from "./svg/FillGradient";
import CreateColourRect from "./svg/CreateColourRect";
import UniqueId from '../utils/UniqueId';
import {IGradientStop} from "picky";

export class HuePane
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

        CreateColourRect(this.element, this.drawGradient());
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
        
        Css.addClass(element, 'picky-hue-pane');
        
        //  append the new element to the popup element
        
        App.popup.element.appendChild(element);
        
        //  return the new element
        
        return element;
    }


    /**
     * populate the colour fill within the element
     */
    populateColours()
    {
        return this.drawGradient();

        //  add gradient fill to element

        //this.element.setAttribute('fill', 'url(#' + gradient_id + ')');
    }


    /**
     * draw a rainbow gradient in the hue panel
     */
    drawGradient() : string
    {
        var id: string,
            stops: IGradientStop[];

        //  create a unique id for the gradient

        id = UniqueId('picky-svg-gradient-');
        
        //  set the colours we're going to use in the gradient

        stops = 
            [
                {
                    colour: '#ff0000',
                    offset: '0%'
                },
                {
                    colour: '#0000ff',
                    offset: '100%'
                }
            ];
        
        //  create a gradient within the svg element
        //  populate the gradient with the required colours

        FillGradient( CreateGradientElement(this.element, id), stops);

        //  return the gradient's id

        return id;
    }
}