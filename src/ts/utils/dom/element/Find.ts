import {StringUtils}  from "../../string/StringUtils";

export class Find
{
    /**
     * find an element by class or id
     * (or identify if we've been given a jQuery object)
     * @param selector
     */
    static any(selector: any) : HTMLElement | NodeList
    {
        //  check we've been given a valid selector

        if ( ! selector) return null;

        //  check if we've been given an id or a class

        if (~selector.indexOf('#')) return Find.byId(selector);
        if (~selector.indexOf('.')) return Find.byClass(selector);

        return null;
    }


    /**
     * find the first matching element
     * @param selector
     */
    static one(selector: any) : HTMLElement
    {
        var result: HTMLElement | NodeList;

        //  find the element(s) with the matching selector

        result = Find.any(selector);

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
    static byClass(className: string) : NodeList
    {
        return document.getElementsByClassName( StringUtils.trim(className, 1));
    }


    /**
     * find an element by its id
     */
    static byId(id: string) : HTMLElement
    {
        return document.getElementById( StringUtils.trim(id, 1));
    }
}