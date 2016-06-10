/**
 * find the closest parent of type T;
 * eg find the next <p> up the tree
 */
export default (selector: HTMLElement, tag: string) : HTMLElement =>
{
    //  make sure tag name is upper case

    tag = tag.toUpperCase();

    while (selector)
    {
        //  test the element;
        //  if it's the correct tag type then return it

        if (selector.tagName && selector.tagName === tag) return selector;

        //  if it's not right then test the next parent

        selector = selector.parentElement;
    }
    
    return null;
};