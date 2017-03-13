/**
 * find the first matching element
 * @param selector
 */
export function findOne(selector: string | HTMLElement) : HTMLElement
{
    //  if we've been given an HTML element, return it

    if (selector instanceof HTMLElement) return <HTMLElement>selector;

    //  find the element(s) with the matching selector

    return <HTMLElement>document.querySelector(<string>selector);
}


/**
 * find an element with a given data-role within an element
 * @param selector
 * @param role
 * @return {any}
 */
export function findByRoleWithin(selector: string | HTMLElement, role: string) : HTMLElement
{
    try
    {
        return <HTMLElement>findOne(selector).querySelector('[data-role="' + role + '"]');
    }
    catch(e)
    {
        console.warn('no element found');

        return null;
    }
}


/**
 * find multiple elements with a given data-role within an element
 * @param selector
 * @param role
 * @return {any}
 */
export function findByRolesWithin(selector: string | HTMLElement, role: string) : NodeListOf<HTMLElement>
{
    try
    {
        return <NodeListOf<HTMLElement>>findOne(selector).querySelectorAll('[data-role="' + role + '"]');
    }
    catch(e)
    {
        return null;
    }
}