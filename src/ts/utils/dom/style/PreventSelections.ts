/**
 * prevent selections in the document
 * @param allowSelections
 */
export function allowSelections(allowSelections: boolean = false)
{
    let styles: string[],
        value: string;

    //  create a list of all the non-editable styles

    styles =
        [
            '-webkit-touch-callout',
            '-webkit-user-select',
            '-khtml-user-select',
            '-moz-user-select',
            '-ms-user-select',
            'user-select'
        ];

    //  get the value we want to set

    value = allowSelections === true ? null : 'none';

    //  add or remove all styles

    styles.map(style => document.body.style.setProperty(style, value));
}