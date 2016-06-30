import {IOptions} from "picky";

export class PositionTracker
{
    target: HTMLElement;
    trackFunc: (event: MouseEvent) => void;
    
    constructor(private iid:string, options: IOptions)
    {

    }

    /**
     * start tracking mouse position within an object
     * @param event
     */
    startTracking(event: MouseEvent, trackFunc: (event: MouseEvent) => void)
    {
        //  get event target element

        this.target = <HTMLElement>event.target;

        //  save tracking function;
        //  we'll call this every time the mouse moves
        //TODO  maybe use onRequestAnimationFrame?

        this.trackFunc = trackFunc;
        
        //  listen to mouse movement within the element

        document.addEventListener('mousemove', this.trackFunc);
        
        //  listen for mouse-up events anywhere on the document;
        //  this will cancel the tracking listener
        
        document.addEventListener('mouseup', this.stopTracking);
    }


    /**
     * track the position of the mouse within the element
     * @param event
     */
    trackPosition = (event: MouseEvent) =>
    {
        
    }


    /**
     * stop tracking mouse position
     */
    stopTracking = () =>
    {
        console.log('mouse up');

        //  stop tracking mouse movement within the element

        document.addEventListener('mousemove', this.trackFunc);

        //  stop listening for mouse-up events on the document
        
        document.removeEventListener('mouseup', this.stopTracking);
    }
}