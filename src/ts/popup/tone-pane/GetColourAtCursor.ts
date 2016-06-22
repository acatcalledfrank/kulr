import App from "../../App";
/**
 * get the colour under the user's cursor
 * @param event
 */
export default (event: MouseEvent) =>
{
    console.log('getting colour', event);

    // var client_rect: ClientRect,
    //     mouse_offset: number,
    //     hue: number;
    //
    // //  assume y offset is the one we want for now
    // //TODO  add optional X offset so we could have a horizontal hue slider if needed
    //
    // //  get element bounding rect
    //
    // client_rect = (<HTMLElement>event.target).getBoundingClientRect();
    //
    // //  calculate the offset of the mouse within the clicked element
    //
    // mouse_offset = event.pageY - client_rect.top;
    //
    // //  and translate to hue
    //
    // hue = (mouse_offset / client_rect.height) * 360;
    //
    // //  set the hue value 
    //
    // App.huePane.setHue(hue);
    // App.tonePane.setHue(hue);
    //
    // console.log('hue:', hue);
}