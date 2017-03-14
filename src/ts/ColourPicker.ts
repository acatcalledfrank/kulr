import {IPickMeOptions} from 'pick-me';
import {createBasicColourPicker} from "./elements/basic-colour-picker/BasicColourPicker";
import {activeID} from "./state/Observables";
import {inputToHSL, observableHex, setObservableHSL} from "./colour/ColourMixer";
import {Observable, Subject} from '@reactivex/rxjs';

export class ColourPicker
{
    colour: string;
    observableColour: Observable<string>;
    active: boolean;

    constructor(public options: IPickMeOptions)
    {

    }


    /**
     * bootstrap the instance
     * TODO  add alternative styles; library swatches, recently used colours, different colour wheels/formats, opacity
     */
    bootstrap()
    {
        //  create a basic colour picker

        createBasicColourPicker(this.options);

        //  set the default colour

        this.setColour(this.options.defaultColour);

        //  add listeners

        this.addListeners();
    }


    /**
     * set the current colour for the picker
     * @param input
     */
    setColour(input: string)
    {
        //  create and populate the colour picker popup

        this.colour = input;

        //  briefly set the active id

        activeID.next(this.options.id);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(inputToHSL(this.colour));

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

        //  subscribe to the observable hex and debounce so we're not updating the external watcher every tick;
        //  also add a filter condition to ensure we only dispatch the output when the picker is active -
        //  this avoids loops where the picker is externally updated

        this.observableColour = observableHex.filter(hex => this.active).debounce(() => Observable.interval(250));
    }


    /**
     * activate the pane; start listening for relevant events
     */
    activatePane()
    {
        //  update the picker's current colour, with a short debounce

        observableHex.takeUntil(activeID).debounce(() => Observable.interval(100)).subscribe(hex => this.colour = hex);

        //  convert the input to HSL and update observable HSL values

        setObservableHSL(inputToHSL(this.colour));

        //  set active state

        this.active = true;
    }


    /**
     * deactivate the pane
     */
    deactivatePane()
    {
        //  set active state

        this.active = false;
    }



    /**
     * destroy this instance
     */
    destroy()
    {

    }
}
