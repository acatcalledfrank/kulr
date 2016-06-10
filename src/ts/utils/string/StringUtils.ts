export class StringUtils
{
    constructor()
    {

    }


    /**
     * trim character from the start and end of a string
     * @param start
     * @param end
     */
    static trim(input: string, start?: number, end?: number) : string
    {
        var output: string,
            split: string[];
        
        //  trim trailing spaces

        output = input.trim();

        //  do we want to remove any characters from the string?

        if ( ! start && ! end) return output;

        //  if so, split string into an array of characters

        split = output.split('');

        //  remove N characters from the start and end

        split.splice(0, start);
        split.splice(-1, end);

        //  and return the re-joined string

        return split.join('');
    }
}