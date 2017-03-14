/// <reference path="../../typings/index.d.ts" />

import * as tinycolor from "tinycolor2";
import {saveInstance, getInstance} from "./dictionary/Dictionary";
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
 * retrieve an instance by id
 * @param id
 * @returns {IPickMeInstance}
 */
export function getColourPicker(id: string) : IPickMeInstance
{
    return getInstance(id);
}


/**
 * update the current colour for an instance
 * @param id
 * @param input //  rgb, hsl, hex
 */
export function updateColourPicker(id: string, input: string)
{
    //  activate the instance

    activeID.next(id);

    //  update observable HSL values

    setObservableHSL(tinycolor(input).toHsl());
}


/**
 * close all colour pickers
 */
export function closeAllColourPickers()
{
    activeID.next(null);
}