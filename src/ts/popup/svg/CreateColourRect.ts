/**
 * create and append an SVG gradient
 * @param svg
 */
export default (svg: SVGSVGElement, gradient_id: string) =>
{
    var rect: SVGRectElement;

    //  create the new rect element

    rect = <SVGRectElement>document.createElementNS(svg.namespaceURI, 'rect');

    //  make it fill the container

    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');

    //  fill it with the gradient

    rect.setAttribute('fill', 'url(#' + gradient_id + ')');

    //  add the rect to the page

    svg.appendChild(rect);
}