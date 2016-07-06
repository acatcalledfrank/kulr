import {IOptions, IGradientStop} from "picky";

import {findOne} from "../../utils/dom/element/Find";
import App from "../../App";
import CreateGradientElement from "../svg/CreateGradientElement";
import SetGradientDirection from "../svg/SetGradientDirection";
import FillGradient from "../svg/FillGradient";
import CreateColourRect from "../svg/CreateColourRect";
import {Interactions} from './Interactions';
import {getUniqueId} from "../../utils/UniqueId";
import {fillContainer} from "../../utils/dom/style/FillContainer";
import {addClass} from "../../utils/dom/style/Css";

export class HuePane
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

        CreateColourRect(this.element, this.drawGradient());
        
        //  add interaction listeners to the element
        
        new Interactions(this.element).listen();
    }
    
    
    /**
     * create the element for the hue pane
     */
    createGradientElement() : SVGSVGElement
    {
        var element: SVGSVGElement;

        //  create the new element

        element = <SVGSVGElement>document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        //  add the relevant class
        
        addClass(element, 'picky-hue-pane__palette');
        
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
        return findOne(this.options.elements.hue_pane);
    }


    /**
     * draw a rainbow gradient in the hue panel
     */
    drawGradient() : string
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
                    colour: '#ff0000',
                    offset: '0%'
                },
                {
                    colour: '#ff00ff',
                    offset: '16%'
                },
                {
                    colour: '#0000ff',
                    offset: '33%'
                },
                {
                    colour: '#00ffff',
                    offset: '50%'
                },
                {
                    colour: '#00ff00',
                    offset: '67%'
                },
                {
                    colour: '#ffff00',
                    offset: '84%'
                },
                {
                    colour: '#ff0000',
                    offset: '100%'
                }
            ];
        
        //  create a gradient within the svg element

        gradient = CreateGradientElement(this.element, id);

        //  set the gradient direction

        SetGradientDirection(gradient, ['0', '0', '0', '100%']);

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
        //TODO  move the selection indicator to the current hue position
    }
}