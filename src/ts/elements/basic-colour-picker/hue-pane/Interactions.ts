import {clamp} from "../../../utils/math/Clamp";
import {observableHue} from "../../../state/Observables";
import {allowSelections} from "../../../utils/dom/style/PreventSelections";

let huePane: HTMLElement;


/**
 * when the user presses the mouse down, start tracking the mouse position
 * @param event
 */
export function onHuePaneMouseDown(event: MouseEvent)
{
    //  save the element

    huePane = <HTMLElement>event.currentTarget;

    //  prevent selections

    allowSelections(false);

    //  add listeners to the document

    huePane.ownerDocument.addEventListener('mousemove', getHueAtCursor);
    huePane.ownerDocument.addEventListener('mouseup', onMouseUp);
}


/**
 * calculate the hue at the current cursor position
 * @param event
 * @returns {number}
 */
function getHueAtCursor(event: MouseEvent)
{
    let client_rect: ClientRect,
        mouse_offset: number,
        hue: number;

    //  assume y offset is the one we want for now
    //TODO  add optional X offset so we could have a horizontal hue slider if needed

    //  get element bounding rect

    client_rect = huePane.getBoundingClientRect();

    //  calculate the offset of the mouse within the clicked element

    mouse_offset = event.pageY - client_rect.top;

    //  limit off set to between zero - rect height

    mouse_offset = clamp(mouse_offset, 0, client_rect.height);

    //  and translate to hue

    hue = 1 - (mouse_offset / client_rect.height);

    //  return the hue

    observableHue.next(hue * 360);
}


/**
 * when the user releases the mouse button, stop tracking the position
 * @param event
 */
let onMouseUp = (event: MouseEvent) =>
{
    //  remove event listeners from the document

    event.currentTarget.removeEventListener('mousemove', getHueAtCursor);
    event.currentTarget.removeEventListener('mouseup', onMouseUp);

    //  allow selections

    allowSelections(true);
};