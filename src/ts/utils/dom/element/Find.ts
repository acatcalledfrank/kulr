import {trimString}  from "../../string/StringUtils";

/**
 * find an element by class or id
 * (or identify if we've been given a jQuery object)
 * @param selector
 */
export function findAny(selector: any) : HTMLElement | NodeList
{
    //  check we've been given a valid selector

    if ( ! selector) return null;

    //  check if we've been given an id or a class

    if (~selector.indexOf('#')) return findById(selector);
    if (~selector.indexOf('.')) return findByClass(selector);

    return null;
}


/**
 * find the first matching element
 * @param selector
 */
export function findOne(selector: any) : HTMLElement
{
    var result: HTMLElement | NodeList;

    //  find the element(s) with the matching selector

    result = findAny(selector);

    //  if no matching element is found then return null

    if ( ! result) return null;

    //  if the result is a single element then return it

    if (result instanceof HTMLElement) return result;

    //  otherwise return the first matching instance

    return <HTMLElement>(<NodeList>result).item(0);
}


/**
 * find elements by class
 */
export function findByClass(className: string) : NodeList
{
    return <NodeList>document.getElementsByClassName( trimString(className, 1));
}


/**
 * find an element by its id
 */
export function findById(id: string) : HTMLElement
{
    return document.getElementById( trimString(id, 1));
}