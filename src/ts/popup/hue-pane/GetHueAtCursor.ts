import App from "../../App";
import {clamp} from "../../utils/math/Clamp";

/**
 * get the colour under the user's cursor
 * @param event
 */
export function getHueAtCursor(target: Element, event: MouseEvent) : number
{
    var client_rect: ClientRect,
        mouse_offset: number,
        hue: number;

    //  assume y offset is the one we want for now
    //TODO  add optional X offset so we could have a horizontal hue slider if needed

    //  get element bounding rect

    client_rect = target.getBoundingClientRect();

    //  calculate the offset of the mouse within the clicked element

    mouse_offset = event.pageY - client_rect.top;

    //  limit off set to between zero - rect height

    mouse_offset = clamp(mouse_offset, 0, client_rect.height);
    
    //  and translate to hue
    
    hue = 1 - (mouse_offset / client_rect.height);
    
    //  return the hue
    
    return hue;
}