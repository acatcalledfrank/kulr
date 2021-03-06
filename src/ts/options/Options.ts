import * as log from "loglevel";
import {defaultsDeep} from "lodash";
import {getUniqueId} from "../utils/UniqueId";
import {pickMeConstants} from "../constants/Constants";
import {findByRoleWithin, findOne} from "../utils/dom/element/Find";
import {IInternalOptions, IKulrOptions} from "kulr";
import {Subject} from 'rxjs/Subject';

//  define some default options

const defaultOptions: IKulrOptions =
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
export function validateOptions(options: IInternalOptions) : boolean
{
    try
    {
        //  test whether we can find the target element for the picker

        const element: HTMLElement = findOne(options.elements.selector);

        //  if no element is found, return false

        if ( ! element) return false;

        //  populate some defaults in the options

        defaultsDeep(options, defaultOptions);

        //  override specific properties if they don't exist

        options.id = options.id || getUniqueId();

        //  create an observable subject in the options object to help us destroy the instance

        options.destroy = new Subject<boolean>();

        //  return the target element as a boolean

        return true;
    }
    catch(e)
    {
        log.warn('kulr/creation error', e.message);
    }
}