import {clamp} from "../../../utils/math/Clamp";
import {observableLightness, observableSaturation} from "../../../state/Observables";
import {allowSelections} from "../../../utils/dom/style/PreventSelections";

let tonePane: HTMLElement;


/**
 * when the user presses the mouse down, start tracking the mouse position
 * @param event
 */
export function onTonePaneMouseDown(event: MouseEvent)
{
    //  save the element

    tonePane = <HTMLElement>event.currentTarget;

    //  allow selections

    allowSelections(false);

    //  add listeners to the document

    tonePane.ownerDocument.addEventListener('mousemove', getToneAtCursor);
    tonePane.ownerDocument.addEventListener('mouseup', onMouseUp);
}


/**
 * calculate the tone at the current cursor position
 * @param event
 * @returns {number}
 */
function getToneAtCursor(event: MouseEvent)
{
    let client_rect: ClientRect,
        mouse_offset_x: number,
        mouse_offset_y: number,
        saturation: number,
        lightness: number;

    //  assume y offset is the one we want for now
    //TODO  add optional X offset so we could have a horizontal hue slider if needed

    //  get element bounding rect

    client_rect = tonePane.getBoundingClientRect();

    //  calculate the offset of the mouse within the clicked element

    mouse_offset_x = (event.pageX - client_rect.left) / client_rect.width;
    mouse_offset_y = (event.pageY - client_rect.top) / client_rect.height;

    //  clamp offsets between 0-1;
    //  saturation is pretty easy and just goes from 0-1 as we go left-right

    saturation = clamp(mouse_offset_x, 0, 1);

    //  lightness is a bit tricky because it's affected by both the X and Y axes;

    //  1 - 0.5
    //  |   |
    //  0 - 0

    //  so we want to deduct some of the sat value when in the top-right corner

    lightness = (1 - clamp(mouse_offset_y, 0, 1));
    lightness -= saturation * 0.5 * lightness;

    //  set the observable saturation and lightness

    observableSaturation.next(saturation);
    observableLightness.next(lightness);
}


/**
 * when the user releases the mouse button, stop tracking the position
 * @param event
 */
let onMouseUp = (event: MouseEvent) =>
{
    //  remove event listeners from the document

    event.currentTarget.removeEventListener('mousemove', getToneAtCursor);
    event.currentTarget.removeEventListener('mouseup', onMouseUp);

    //  allow selections

    allowSelections(true);
};