// /**
//  * did a click take place outside the target element?
//  * @param event
//  * @param target
//  * @returns {boolean}
//  */
// export function wasClickOutside(event: MouseEvent, target: HTMLElement) : boolean
// {
//     var parent: HTMLElement;
//
//     //  when the user clicks within the document,
//     //  check the target and parent of the click;
//
//     //  if the click took place within a UI element associated with this kwill instance then ignore it
//
//     parent = <HTMLElement>event.target;
//
//     while (parent)
//     {
//         //  if the click target matches the given target,
//         //  the event took place inside the target,
//         //  so let's return false
//        
//         if (parent === target) return false;
//
//         //  if it doesn't match, keep searching up the DOM
//
//         parent = parent.parentElement;
//     }
//
//     return true;
// }


/**
 * did a click take place outside the target element?
 * @param event
 * @param target
 * @returns {boolean}
 */
export function clickWasOutside(event: MouseEvent, iid: string) : boolean
{
    var parent: HTMLElement;

    //  when the user clicks within the document,
    //  check the target and parent of the click;

    //  if the click took place within a UI element associated with this kwill instance then ignore it

    parent = <HTMLElement>event.target;

    while (parent)
    {
        //  if the click target matches the given target,
        //  the event took place inside the target,
        //  so let's return false
        
        if (parent.dataset['iid'] === iid) return false;

        //  if it doesn't match, keep searching up the DOM

        parent = parent.parentElement;
    }

    return true;
}

