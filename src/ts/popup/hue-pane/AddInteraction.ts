import GetHueAtCursor from './GetHueAtCursor';

export default (element: SVGSVGElement) =>
{
    //  on click, select the colour under the cursor

    element.addEventListener('click', GetHueAtCursor);
}