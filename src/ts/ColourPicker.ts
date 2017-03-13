import {IPickMeOptions} from 'pick-me';
import {createBasicColourPicker} from "./elements/basic-colour-picker/BasicColourPicker";
import {activeID} from "./state/Observables";
import {hexToHSL, observableHex, setObservableHSL} from "./colour/ColourMixer";
import {Observable, Subject} from '@reactivex/rxjs';

export class ColourPicker
{
    colour: string;
    observableColour: Observable<string>;

    constructor(public options: IPickMeOptions)
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
        //  subscribe to the active instance id

        activeID.delay(100).subscribe(id => this.options.id === id ? this.activatePane() : this.deactivatePane());

        //  subscribe to the observable hex and debounce so we're not updating the external watcher every tick

        this.observableColour = observableHex.debounce(() => Observable.interval(500));

    }


    /**
     * activate the pane; start listening for relevant events
     */
    activatePane()
    {
        //  update the picker's current colour, with a short debounce

        observableHex.takeUntil(activeID).debounce(() => Observable.interval(100)).subscribe(hex => this.colour = hex);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(hexToHSL(this.colour));
    }


    /**
     * deactivate the pane
     */
    deactivatePane()
    {

    }



    /**
     * destroy this instance
     */
    destroy()
    {

    }
}
