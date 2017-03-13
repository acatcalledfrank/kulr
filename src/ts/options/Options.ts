import * as log from "loglevel";
import {IPickyOptions} from "picky";
import {getUniqueId} from "../utils/UniqueId";


/**
 * validate the options passed in by the user
 * @param options
 */
export function validateOptions(options: IPickyOptions) : IPickyOptions
{
    if ( ! options)
    {
        log.warn('picky: no options found');

        return;
    }

    //  populate some defaults in the options

    options.id = options.id || getUniqueId();

    //  return the updated options object

    return options;
}