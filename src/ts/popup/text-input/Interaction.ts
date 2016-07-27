import App from "../../App";

export class Interactions
{
    constructor(private element: HTMLInputElement)
    {

    }


    /**
     * listen for interactions
     */
    listen()
    {
        this.element.addEventListener('input', this.onContentInput);
    }


    /**
     * when the user presses the mouse down,
     * get the hue at the current position
     * and start listening for further interactions
     */
    onContentInput = () =>
    {
        //  set the new hue

        App.palette.setHexString(this.element.value);

        //  dispatch a colour update event

        App.events.updateColour.dispatch( App.palette.getHexString());
    };
}