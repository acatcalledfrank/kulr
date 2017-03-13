import {IInstanceDictionary, IPickyInstance} from "picky";

var dictionary: IInstanceDictionary;


/**
 * save an instance
 * @param instance
 * @param instanceID
 */
export function saveInstance(instance: IPickyInstance, instanceID: string)
{
    getDictionary()[instanceID] = instance;
}


/**
 * retrieve an instance by ID
 * @param instanceID
 * @return {IPickyInstance}
 */
export function getInstance(instanceID: string)
{
    return getDictionary()[instanceID];
}


/**
 * get the dictionary object
 */
function getDictionary() : IInstanceDictionary
{
    return dictionary || (dictionary = {});
}