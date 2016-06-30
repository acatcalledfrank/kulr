/**
 * make an element fill its container
 * @param element
 */
export function fillContainer(element: HTMLElement | any)
{
    element.style.position = 'absolute';
    element.style.top = '0px';
    element.style.left = '0px';
    element.style.width = '100%';
    element.style.height = '100%';
}