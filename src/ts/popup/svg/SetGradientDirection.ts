/**
 * create and append an SVG gradient
 * @param svg
 */
export default (gradient: SVGGradientElement, points: string[]) =>
{
    //  set direction

    gradient.setAttribute('x1', points[0]);
    gradient.setAttribute('y1', points[1]);
    gradient.setAttribute('x2', points[2]);
    gradient.setAttribute('y2', points[3]);

    //  return the gradient

    return gradient;
}