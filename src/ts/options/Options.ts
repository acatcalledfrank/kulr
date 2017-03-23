import * as log from "loglevel";
import {getUniqueId} from "../utils/UniqueId";
import {pickMeConstants} from "../constants/Constants";
import {findByRoleWithin} from "../utils/dom/element/Find";
import {IPickMeOptions} from "pick-me";


/**
 * validate the options passed in by the user
 * @param options
 * @return {boolean}
 */
export function validateOptions(options: IPickMeOptions) : boolean
{
    try
    {
        //  test whether we can find the target element for the picker

        const element: HTMLElement = findByRoleWithin(options.elements.selector, pickMeConstants.elements.TOGGLE);

        //  populate some defaults in the options

        options.id = options.id || getUniqueId();

        //  return the target element as a boolean

        return !! element;
    }
    catch(e)
    {
        log.warn('pick-me/creation error', e.message);
    }
}