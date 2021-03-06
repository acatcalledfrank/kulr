import {IGradientStop, IKulrOptions} from "kulr";
import {createColourPaneSVGElement, createSvg, createSvgGradient, fillGradient, setGradientDirection} from "../../svg/SvgUtils";
import {getUniqueId} from "../../../utils/UniqueId";
import {pickMeConstants} from "../../../constants/Constants";
import {findByRoleWithin} from "../../../utils/dom/element/Find";


/**
 * create and populate the hue-pane element
 * @param options
 */
export function populateHuePane(options: IKulrOptions) : SVGSVGElement
{
    let svg: SVGSVGElement;

    //  create pane elements, returning the svg colour pane

    svg = createSvg(findByRoleWithin(options.elements.selector, pickMeConstants.elements.HUE_PANE));

    //  create an SVG rect and fill with the gradient

    createColourPaneSVGElement(svg, createGradient(svg));

    //  return the svg element

    return svg;
}


/**
 * create a gradient, then create and fill an SVG rect
 * @param svg
 * @returns {string}
 */
function createGradient(svg: SVGSVGElement)
{
    let id: string,
        gradient: SVGGradientElement,
        stops: IGradientStop[];

    //  create a unique id for the gradient

    id = getUniqueId('kulr-svg-gradient-');

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

    gradient = createSvgGradient(svg, id);

    //  set the gradient direction

    setGradientDirection(gradient, ['0', '0', '0', '100%']);

    //  populate the gradient with the required colours

    fillGradient(gradient, stops);

    //  return the id of the gradient we've just created

    return id;
}