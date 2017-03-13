/// <reference path="../../typings/index.d.ts" />

import {saveInstance} from "./dictionary/Dictionary";
import {ColourPicker} from "./ColourPicker";
import {activeID} from "./state/Observables";
import {hexToHSL, setObservableHSL} from "./colour/ColourMixer";
import {IPickMeOptions} from 'pick-me';
import {IPickMeInstance} from 'pick-me';


/**
 * create a new instance of pick-me
 * @param options
 * @return {IPickMeInstance}
 */
export function createColourPicker(options: IPickMeOptions) : IPickMeInstance
{
    let instance: IPickMeInstance;

    //  create a new instance

    instance = new ColourPicker(options);

    //  bootstrap the instance

    instance.bootstrap();

    //  save the instance

    saveInstance(instance, '');

    //  return the new colour picker instance

    return instance;
}


/**
 * update the current colour for an instance
 * @param id
 * @param colour
 */
export function updateColourPicker(id: string, colour: string)
{
    //  activate the instance

    activeID.next(id);

    //TODO  detect input type and convert the input to HSL if needed

    //  update observable HSL values

    setObservableHSL(hexToHSL(colour));
}


/**
 * close all colour pickers
 */
export function closeAllColourPickers()
{
    activeID.next(null);
}