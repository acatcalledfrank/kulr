import * as log from 'loglevel';
import {activeID, observableHue} from "../../../state/Observables";
import {populateHuePane} from "./Elements";
import {onHuePaneMouseDown} from "./Interactions";
import {IInternalOptions, IKulrOptions} from "kulr";


/**
 * create and populate a hue-pane element
 * @param options
 */
export function createHuePane(options: IKulrOptions)
{
    //  create pane elements, returning the svg colour pane
    //  then add interaction listeners to the SVG

    addListeners(populateHuePane(options), options);
}


/**
 * add interaction listeners to the pane
 * @param svg
 * @param options
 */
function addListeners(svg: SVGSVGElement, options: IInternalOptions)
{
    activeID.takeUntil(options.destroy).subscribe(id => options.id === id ? activatePane(svg) : deactivatePane(svg));
}


/**
 * activate the pane; start listening for relevant events
 * @param svg
 */
function activatePane(svg: SVGSVGElement)
{
    //  subscribe to hue updates, stopping when the active id changes

    observableHue.takeUntil(activeID).subscribe(hue => onHueUpdate(hue));

    //  listen for mouse interactions

    svg.addEventListener('mousedown', onHuePaneMouseDown);
}


/**
 * deactivate the pane
 * @param svg
 */
function deactivatePane(svg: SVGSVGElement)
{
    //  stop listening for mouse interactions

    svg.removeEventListener('mousedown', onHuePaneMouseDown);
}


/**
 * when the observable hue updates, update the pane
 * @param hue
 */
function onHueUpdate(hue: number)
{
    // console.log(hue);
}