import {IGradientStop} from "picky";

/**
 * populate a gradient with the given colour stops
 * @param gradient
 * @param stops
 */
export default (gradient: SVGGradientElement, stops: IGradientStop[]) =>
{
    var svg_ns: string,
        stop: SVGStopElement;

    //  get SVG namespace

    svg_ns = gradient.parentElement.namespaceURI;

    for (var i: number = 0; i < stops.length; i ++)
    {
        //  create a new stop element

        stop = <SVGStopElement>document.createElementNS(svg_ns, 'stop');

        //  set the stop's colour and position within the gradient

        stop.setAttribute('offset', stops[i].offset);
        stop.setAttribute('stop-color', stops[i].colour);

        //  append the stop to the gradient

        gradient.appendChild(stop);
    }
}