import {IGradientStop} from "kulr";


/**
 * create and populate an SVG element
 * @param element
 * @return {SVGSVGElement}
 */
export function createSvg(element: HTMLElement) : SVGSVGElement
{
    let svgElement: SVGSVGElement;

    //  create the new element

    svgElement = <SVGSVGElement>document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    //  make the element fill its container

    fillContainer(svgElement);

    //  append the new element to the popup element

    element.appendChild(svgElement);

    //  return the new element

    return svgElement;
}


/**
 * create and append an SVG gradient
 * @param svg
 * @param id
 * @param type
 * @return {SVGGradientElement}
 */
export function createSvgGradient(svg: SVGSVGElement, id: string, type: string = 'linearGradient')
{
    let svg_ns: string,
        defs: SVGDefsElement,
        gradient: SVGGradientElement;

    //  get SVG namespace

    svg_ns = svg.namespaceURI;

    //  create and append defs element

    defs = <SVGDefsElement>(svg.querySelector('defs') || svg.insertBefore( document.createElementNS(svg_ns, 'defs'), svg.firstChild));

    //  create the gradient

    gradient = <SVGGradientElement>document.createElementNS(svg_ns, type);

    //  add an id (we need this to set the gradient as the fill of an element later)

    gradient.setAttribute('id', id);

    //  set direction

    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '100%');

    //  append the gradient to the SVG defs

    defs.appendChild(gradient);

    //  return the gradient

    return gradient;
}


/**
 * create and append an SVG gradient
 * @param gradient
 * @param points
 * @return {SVGGradientElement}
 */
export function setGradientDirection(gradient: SVGGradientElement, points: string[])
{
    //  set direction

    gradient.setAttribute('x1', points[0]);
    gradient.setAttribute('y1', points[1]);
    gradient.setAttribute('x2', points[2]);
    gradient.setAttribute('y2', points[3]);

    //  return the gradient

    return gradient;
}


/**
 * populate a gradient with the given colour stops
 * @param gradient
 * @param stops
 */
export function fillGradient(gradient: SVGGradientElement, stops: IGradientStop[])
{
    stops.forEach(stop =>
    {
        let stopElement: SVGStopElement;

        //  create a new stop element

        stopElement = <SVGStopElement>document.createElementNS(gradient.parentElement.namespaceURI, 'stop');

        //  set the stop's colour and position within the gradient

        stopElement.setAttribute('offset', stop.offset);
        stopElement.setAttribute('stop-color', stop.colour);
        stopElement.setAttribute('stop-opacity', stop.opacity || '1');

        //  append the stop to the gradient

        gradient.appendChild(stopElement);
    })
}


/**
 * create and append an SVG gradient
 * @param svg
 * @param gradient_id
 */
export function createColourPaneSVGElement(svg: SVGSVGElement, gradient_id: string)
{
    let rect: SVGRectElement;

    //  create the new rect element

    rect = <SVGRectElement>document.createElementNS(svg.namespaceURI, 'rect');

    //  make it fill the container

    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');

    //  fill it with the gradient

    rect.setAttribute('fill', 'url(' + svg.ownerDocument.defaultView.location.href + '#' + gradient_id + ')');

    //  add the rect to the page

    svg.appendChild(rect);
}


/**
 * make an element fill its container
 * @param element
 */
function fillContainer(element: SVGSVGElement)
{
    element.style.position = 'absolute';
    element.style.top = '0px';
    element.style.left = '0px';
    element.style.width = '100%';
    element.style.height = '100%';
}