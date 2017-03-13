import {IPickyOptions} from 'picky';
import {createBasicColourPicker} from "./elements/basic-colour-picker/BasicColourPicker";
import {activeID} from "./state/Observables";
import {hexToHSL, observableHex, setObservableHSL} from "./colour/ColourMixer";

export class ColourPicker
{
    colour: string;

    constructor(public options: IPickyOptions)
    {

    }


    /**
     * bootstrap the instance
     * TODO  add alternative styles; library swatches, recently used colours, different colour wheels/formats
     */
    bootstrap()
    {
        //  create a basic colour picker

        createBasicColourPicker(this.options);

        //  set the default colour

        this.setDefaultColour();

        //  add listeners

        this.addListeners();
    }


    /**
     * set the default colour for the picker
     */
    setDefaultColour()
    {
        //  create and populate the colour picker popup

        this.colour = this.options.defaultColour;

        //  briefly set the active id

        activeID.next(this.options.id);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(hexToHSL(this.colour));

        //  reset the observable id

        activeID.next(null);
    }


    /**
     * set the current colour for the picker
     * @param hex
     */
    setColour(hex: string)
    {
        //  create and populate the colour picker popup

        this.colour = hex;

        //  briefly set the active id

        activeID.next(this.options.id);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(hexToHSL(this.colour));

        //  reset the observable id

        activeID.next(null);
    }


    /**
     * add interaction listeners to the pane
     */
    addListeners()
    {
        activeID.delay(100).subscribe(id => this.options.id === id ? this.activatePane() : this.deactivatePane());
    }


    /**
     * activate the pane; start listening for relevant events
     */
    activatePane()
    {
        observableHex.takeUntil(activeID).subscribe(hex => this.colour = hex);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(hexToHSL(this.colour));
    }


    /**
     * deactivate the pane
     */
    deactivatePane()
    {
        //  stop listening for mouse interactions

        // svg.removeEventListener('mousedown', onTonePaneMouseDown);
    }



    /**
     * destroy this instance
     */
    destroy()
    {

    }
}
