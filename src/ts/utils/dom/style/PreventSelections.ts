export function preventSelections(preventSelections: boolean = true)
{
    var styles: string[],
        value: string;

    //  create a list of all the non-editable styles

    styles =
        [
            'webkitTouchCallout',
            'webkitUserSelect',
            'mozUserSelect',
            'msUserSelect',
            'userSelect'
        ];

    //  get the value we want to set

    value = preventSelections === true ? 'none' : '';

    //  add or remove all styles

    for (var i: number = 0; i < styles.length; i++)
    {
        document.body.style[ <any>styles[i]] = value;
    }
}