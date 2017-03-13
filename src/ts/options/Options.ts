import * as log from "loglevel";
import {IPickMeOptions} from "../PickMe";
import {getUniqueId} from "../utils/UniqueId";


/**
 * validate the options passed in by the user
 * @param options
 */
export function validateOptions(options: IPickMeOptions) : IPickMeOptions
{
    if ( ! options)
    {
        log.warn('pick-me: no options found');

        return;
    }

    //  populate some defaults in the options

    options.id = options.id || getUniqueId();

    //  return the updated options object

    return options;
}