/**
 * trim a string
 * @param input
 * @param start
 * @param end
 * @returns {string}
 */
export function trimString(input: string, start?: number, end?: number) : string
{
    var output: string,
        split: string[];

    //  trimString trailing spaces

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


/**
 * add padding characters to the start of a string
 * until it reaches the required length
 * @param input
 * @param prefix
 * @param length
 */
export function prefixString(input: string, prefix: string, length: number = input.length + 1)
{
    var characters: string[];

    //  split string into array

    characters = input.split('');

    //  add prefixes until we reach the required length

    while(characters.length < length)
    {
        characters.unshift(prefix);
    }
    
    //  once we've reached the required length,
    //  join and return the string
    
    return characters.join('');
}