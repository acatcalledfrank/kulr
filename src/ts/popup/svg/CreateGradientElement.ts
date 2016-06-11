/**
 * create and append an SVG gradient
 * @param svg
 */
export default (svg: SVGSVGElement, id: string, type: string = 'linearGradient') =>
{
    var svg_ns: string,
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