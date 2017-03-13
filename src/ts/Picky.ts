/// <reference path="../../typings/index.d.ts" />

import {IPickyOptions} from "picky";
import {saveInstance} from "./dictionary/Dictionary";
import {ColourPicker} from "./ColourPicker";
import {activeID} from "./state/Observables";
import {hexToHSL, setObservableHSL} from "./colour/ColourMixer";


/**
 * create a new instance of picky
 * @param options
 */
export function createColourPicker(options: IPickyOptions)
{
    let instance: ColourPicker;

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