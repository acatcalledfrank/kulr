import App from "../../App";
import {clamp} from "../../utils/math/Clamp";
import {IHSL} from "picky";

/**
 * get the colour under the user's cursor
 * @param event
 */
export function getSaturationAndLightnessAtCursor(target: Element, event: MouseEvent) : IHSL
{
    var client_rect: ClientRect,
        mouse_offset_x: number,
        mouse_offset_y: number,
        saturation: number,
        lightness: number;
    
    //  assume y offset is the one we want for now
    //TODO  add optional X offset so we could have a horizontal hue slider if needed
    
    //  get element bounding rect
    
    client_rect = target.getBoundingClientRect();
    
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

    //  return S and L in an object
    
    return { hue: null, saturation: saturation, lightness: lightness };
}