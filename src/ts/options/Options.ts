import * as log from "loglevel";
import {defaultsDeep} from "lodash";
import {getUniqueId} from "../utils/UniqueId";
import {pickMeConstants} from "../constants/Constants";
import {findByRoleWithin} from "../utils/dom/element/Find";
import {IPickMeOptions} from "pick-me";

//  define some default options

const defaultOptions: IPickMeOptions =
    {
        id: null,
        elements:
            {
                selector: null
            },
        actions:
            {
                liveUpdate: true
            },
        defaultColour: '#333333'
    };

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

        defaultsDeep(options, defaultOptions);

        //  override specific properties if they don't exist

        options.id = options.id || getUniqueId();

        //  return the target element as a boolean

        return !! element;
    }
    catch(e)
    {
        log.warn('pick-me/creation error', e.message);
    }
}