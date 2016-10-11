import {IOptions} from "picky";
import {findOne} from "../../utils/dom/element/Find";
import App from "../../App";

export class Swatch
{
    constructor(private iid: string, private element: HTMLElement)
    {

    }


    /**
     * set up the colour swatch instance;
     * this displays the colour that the user has currently selected
     */
    setup()
    {
        //  do we have an element?
        //  if not then the user probably hasn't supplied a selector,
        //  which means we don't need a swatch

        if ( ! this.element) return;

        //  listen for signals

        App.events.updateColour.add(this.onColourSet);
    }


    /**
     * when the selected colour changes,
     * display it in the swatch
     */
    onColourSet = () =>
    {
        this.element.style.backgroundColor = App.palette.getHexString();
    }
}


/**
 * set up all swatch elements
 * @param selectors
 */
export function createSwatches(selectors: (HTMLElement | string)[])
{
    selectors.map((selector: HTMLElement | string) =>
    {
        saveSwatch( new Swatch(this.iid, findOne(selector)));
    })
}


/**
 * set up all swatches
 */
export function setupSwatches()
{
    getAppSwatchList().map((swatch: Swatch) =>
    {
        swatch.setup();
    })
}


/**
 * get the list of swatch instances
 * @returns {picky.Swatch[]|Array}
 */
function getAppSwatchList() : Swatch[]
{
    return App.swatches || (App.swatches = []);
}


/**
 * save a swatch instance to a list
 * @param swatch
 * @returns {number}
 */
function saveSwatch(swatch: Swatch)
{
    return getAppSwatchList().push(swatch);
}