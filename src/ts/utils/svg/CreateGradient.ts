/**
 * create and append an SVG gradient
 * @param svg
 */
export default (svg: SVGSVGElement) =>
{
    var defs: SVGDefsElement,
        gradient: SVGGradientElement;
    
    //  create and append defs element
    
    svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", 'defs'))
}