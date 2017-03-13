import {populateTonePane} from "./Elements";
import {IPickMeOptions} from "pick-me";
import {activeID, observableHue} from "../../../state/Observables";
import {onTonePaneMouseDown} from "./Interactions";


/**
 * create and populate a tone-pane element
 * @param options
 */
export function createTonePane(options: IPickMeOptions)
{
    //  create pane elements, returning the svg colour pane
    //  then add interaction listeners to the SVG

    addListeners(populateTonePane(options), options);
}


/**
 * add interaction listeners to the pane
 * @param svg
 * @param options
 */
function addListeners(svg: SVGSVGElement, options: IPickMeOptions)
{
    activeID.subscribe(id => options.id === id ? activatePane(svg) : deactivatePane(svg));
}


/**
 * activate the pane; start listening for relevant events
 * @param svg
 */
function activatePane(svg: SVGSVGElement)
{
    //  listen for mouse interactions

    svg.addEventListener('mousedown', onTonePaneMouseDown);
}


/**
 * deactivate the pane
 * @param svg
 */
function deactivatePane(svg: SVGSVGElement)
{
    //  stop listening for mouse interactions

    svg.removeEventListener('mousedown', onTonePaneMouseDown);
}