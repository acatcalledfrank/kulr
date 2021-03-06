/**
 * add a CSS class to an element
 * @param element
 * @param className
 */
export function addClass(element: Element, className: string)
{
    //  check we have a valid element

    if ( ! element) return false;

    //  add class name to list

    element.classList.add(className);
}


/**
 * remove a CSS class from an element
 * @param element
 * @param className
 * @returns {boolean}
 */
export function removeClass(element: HTMLElement, className: string)
{
    //  check we have a valid element

    if ( ! element) return false;

    //  remove class name from list

    element.classList.remove(className);
}


/**
 * toggle the presence of a CSS class on an element
 * @param element
 * @param className
 * @param toggle
 */
export function toggleClass(element: HTMLElement, className: string, add?: boolean) : boolean
{
    var has_class: boolean;

    //  check whether a manual override of toggle value has been supplied

    if (add !== undefined)
    {
        //  if so, add or remove the class according to the user's request

        add ? addClass(element, className) : removeClass(element, className);

        //  stop here

        return;
    }

    //  does the element currently have this class?

    has_class = hasClass(element, className);

    //  add or remove the class as appropriate
    
    if (has_class === false)
    {
        addClass(element, className);
    }
    else
    {
        removeClass(element, className)
    }
    
    //  return the new state
    
    return ! has_class;
}


/**
 * check if an element already has a particular class name
 * @param element
 * @param className
 * @returns {any}
 */
export function hasClass(element: HTMLElement, className: string) : boolean
{
    //  check we have a valid element

    if ( ! element) return false;

    //  check whether the element's class list contains the provided class name

    return element.classList.contains(className);
}