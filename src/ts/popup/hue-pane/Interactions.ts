import GetHueAtCursor from './GetHueAtCursor';
import PreventSelections from '../../utils/dom/style/PreventSelections';

import App from "../../App";

export class Interactions
{
    constructor(private element: SVGSVGElement)
    {
        
    }


    /**
     * listen for interactions
     */
    listen()
    {
        this.element.addEventListener('mousedown', this.onMouseDown);
    }


    /**
     * when the user presses the mouse down,
     * get the hue at the current position
     * and start listening for further interactions
     */
    onMouseDown = () =>
    {
        PreventSelections();

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }


    /**
     * when the user moves the mouse,
     * get the hue under the cursor
     */
    onMouseMove = (event: MouseEvent) =>
    {
        //  get the current hue,
        //  based on the user's mouse position
        
        GetHueAtCursor(this.element, event);
    }


    /**
     * when the user releases the mouse,
     * stop tracking the hue under the cursor
     */
    onMouseUp = () =>
    {
        PreventSelections(false);

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}
    



// export default (element: SVGSVGElement) =>
// {
//     //  on click, select the colour under the cursor
//
//     // element.addEventListener('click', GetHueAtCursor);
//
//     element.addEventListener('mousedown', (event: MouseEvent) => 
//     {
//         //App.positionTracker.startTracking(event, GetHueAtCursor)
//     });
// }