/// <reference path="../../typings/index.d.ts" />

import * as log from "loglevel";
import {saveInstance, getInstance} from "./dictionary/Dictionary";
import {ColourPicker} from "./ColourPicker";
import {activeID} from "./state/Observables";
import {validateOptions} from "./options/Options";
import {IPickMeInstance} from "pick-me";
import {IPickMeOptions} from "pick-me";


/**
 * create a new instance of pick-me
 * @param options
 * @return {IPickMeInstance}
 */
export function createColourPicker(options: IPickMeOptions) : IPickMeInstance
{
    let instance: IPickMeInstance;

    //  test the options we've been given; are they valid?

    if ( ! validateOptions(options)) return;

    //  create a new instance

    instance = new ColourPicker(options);

    //  bootstrap the instance

    instance.bootstrap();

    //  save the instance

    saveInstance(instance, options.id);

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
    try
    {
        getColourPicker(id).setColour(input);
    }
    catch(e)
    {
        log.warn('no colour picker instance found for id', id);
    }
}


/**
 * close all colour pickers
 */
export function closeAllColourPickers()
{
    activeID.next(null);
}