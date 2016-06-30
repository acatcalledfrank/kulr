import App from "../../App";
import {getHueAtCursor} from "./GetHueAtCursor";
import {preventSelections} from "../../utils/dom/style/PreventSelections";

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
        preventSelections();

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };


    /**
     * when the user moves the mouse,
     * get the hue under the cursor
     */
    onMouseMove = (event: MouseEvent) =>
    {
        var hue: number;
        
        //  get the current hue,
        //  based on the user's mouse position
        
        hue = getHueAtCursor(this.element, event);

        //  set the new hue

        App.palette.setHue(hue);

        //  dispatch a colour update event

        App.events.updateColour.dispatch();
    };


    /**
     * when the user releases the mouse,
     * stop tracking the hue under the cursor
     */
    onMouseUp = () =>
    {
        preventSelections(false);

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
}