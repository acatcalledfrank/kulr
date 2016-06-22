import App from "../../App";
import Clamp from "../../utils/math/Clamp";

/**
 * get the colour under the user's cursor
 * @param event
 */
export default (target: Element, event: MouseEvent) =>
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

    mouse_offset = Clamp(mouse_offset, 0, client_rect.height);
    
    //  and translate to hue
    
    hue = 360 - (mouse_offset / client_rect.height) * 360;
    
    //  set the hue value 
    
    App.huePane.setHue(hue);
    App.tonePane.setHue(hue);
}