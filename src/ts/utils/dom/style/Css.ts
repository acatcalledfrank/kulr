class Css
{
    constructor()
    {

    }


    /**
     * add a CSS class to an element
     * @param element
     * @param className
     */
    static addClass(element: HTMLElement, className: string)
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
    static removeClass(element: HTMLElement, className: string)
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
    static toggleClass(element: HTMLElement, className: string, toggle?: boolean)
    {
        // if (toggle !== undefined)
        // {
        //
        // }

        //TODO  allow manual override of toggle value

        if (Css.hasClass(element, className) === false)
        {
            Css.addClass(element, className);
        }
        else
        {
            Css.removeClass(element, className)
        }
    }


    /**
     * check if an element already has a particular class name
     * @param element
     * @param className
     * @returns {any}
     */
    static hasClass(element: HTMLElement, className: string) : boolean
    {
        //  check we have a valid element
        
        if ( ! element) return false;
        
        //  check whether the element's class list contains the provided class name
        
        return element.classList.contains(className);
    }
}

export default Css;