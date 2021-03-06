/**
 * find the first matching element
 * @param selector
 */
export function findOne(selector: string | HTMLElement) : HTMLElement
{
    //  if we've been given an HTML element, return it;

    if (isSelectorElement(<HTMLElement>selector)) return <HTMLElement>selector;

    //  find the element(s) with the matching selector

    return <HTMLElement>document.querySelector(<string>selector);
}


/**
 * check if a selector is an HTML element
 * @param selector
 */
function isSelectorElement(selector: HTMLElement) : boolean
{
    try
    {
        let window: { HTMLElement: any};

        //  get the window owner for this element

        window = <any>selector.ownerDocument.defaultView;

        //  test the object's type

        return selector instanceof window.HTMLElement;
    }
    catch (e)
    {
        return false;
    }
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