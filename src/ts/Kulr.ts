/// <reference path="../../typings/index.d.ts" />

import * as log from "loglevel";
import {saveInstance, getInstance} from "./dictionary/Dictionary";
import {ColourPicker} from "./ColourPicker";
import {activeID} from "./state/Observables";
import {validateOptions} from "./options/Options";
import {IKulrInstance} from "kulr";
import {IKulrOptions} from "kulr";


/**
 * create a new instance
 * @param options
 * @returns {IKulrInstance}
 */
export function createColourPicker(options: IKulrOptions) : IKulrInstance
{
    let instance: IKulrInstance;

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
 * @returns {IKulrInstance}
 */
export function getColourPicker(id: string) : IKulrInstance
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