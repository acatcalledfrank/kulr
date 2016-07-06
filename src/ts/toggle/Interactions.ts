import App from "../App";
import {IOptions} from "picky";
import {clickWasOutside} from "../utils/dom/interaction/ClickOutside";

export class Interactions
{
    constructor(private iid:string, private options: IOptions)
    {

    }


    /**
     * listen for popup-open events
     */
    listen()
    {
        App.events.togglePopup.add(this.onTogglePopup);
    }


    /**
     * when a toggle popup event is triggered,
     * check the iid and app state - if this instance's popup has been opened
     * add a mouse-up listener to the document to let us close it on click outside
     * @param iid
     */
    onTogglePopup = (iid: string) =>
    {
        //  if we're opening this popup, add document click listeners
        //  to detect clicks outside while the popup is open

        if (iid === this.iid && App.state.open)
        {
            document.addEventListener('mouseup', this.onDocumentClick);

            return;
        }

        //  if we're closing it, remove any event listeners

        document.removeEventListener('mouseup', this.onDocumentClick);
    };


    /**
     * when the user clicks the document,
     * check whether the click took place outside the current colour picker instance
     * @param event
     */
    onDocumentClick = (event: MouseEvent) =>
    {
        //  test whether the click was outside the colour picker;
        //  if so, and the user hasn't been selecting a colour,
        //  let's close the popup;
        //  (

        console.log(App.state.dragging);

        if (clickWasOutside(event, this.iid) && ! App.state.dragging)
        {
            //  set the app state to closed

            App.state.open = false;

            //  dispatch the toggle event

            App.events.togglePopup.dispatch(this.iid);
        }
    }
}