import {IGradientStop, IPickMeOptions} from "pick-me";
import {createColourPaneSVGElement, createSvg, createSvgGradient, fillGradient, setGradientDirection} from "../../svg/SvgUtils";
import {getUniqueId} from "../../../utils/UniqueId";
import {activeID, observableHue} from "../../../state/Observables";
import {findByRoleWithin} from "../../../utils/dom/element/Find";
import {pickMeConstants} from "../../../constants/Constants";


/**
 * create and populate the tone-pane element
 * @param options
 * @return {SVGSVGElement}
 */
export function populateTonePane(options: IPickMeOptions) : SVGSVGElement
{
    let pane: HTMLElement,
        svg: SVGSVGElement;

    //  find the tone-pane element

    pane = findByRoleWithin(options.elements.selector, pickMeConstants.elements.TONE_PANE);

    //  create SVG element

    svg = createSvg(pane);

    //  create an SVG rect and fill with the gradient

    createColourPaneSVGElement(svg, createGradient(svg, '#ffffff', ['0', '0', '100%', '0']));
    createColourPaneSVGElement(svg, createGradient(svg, '#000000', ['0', '100%', '0', '0']));

    //  listen for relevant events

    addListeners(pane, options);

    //  return the SVG element

    return svg;
}


/**
 * draw a gradient in the tone panel
 * @param svg
 * @param fill
 * @param direction
 * @return {string}
 */
function createGradient(svg: SVGSVGElement, fill: string, direction: string[]) : string
{
    let id: string,
        gradient: SVGGradientElement,
        stops: IGradientStop[];

    //  create a unique id for the gradient

    id = getUniqueId('pick-me-svg-gradient-');

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

    gradient = createSvgGradient(svg, id);

    //  set the gradient direction

    setGradientDirection(gradient, direction);

    //  populate the gradient with the required colours

    fillGradient(gradient, stops);

    //  return the gradient's id

    return id;
}


/**
 * add interaction listeners to the pane
 * @param pane
 * @param options
 */
function addListeners(pane: HTMLElement, options: IPickMeOptions)
{
    activeID.subscribe(id =>
    {
        if (id === options.id) activatePane(pane);
    });
}


/**
 * activate the pane; start listening for relevant events
 * @param pane
 */
function activatePane(pane: HTMLElement)
{
    //  subscribe to hue updates, stopping when the active id changes

    observableHue.takeUntil(activeID).subscribe(hue => onHueUpdate(pane, hue));
}


/**
 * when the observable hue updates, update the pane
 * @param pane
 * @param hue
 */
function onHueUpdate(pane: HTMLElement, hue: number)
{
    pane.style.backgroundColor = 'hsl(' + hue * 360 + ',100%,50%)';
}