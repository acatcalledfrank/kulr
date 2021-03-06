import 'jsdom-global/register';
import * as mocha from 'mocha';
import {expect} from 'chai';
import {createColourPicker} from "./Kulr";

describe('instance creation', () =>
{
    it('should gracefully handle invalid values during creation', () =>
    {
        //  test creating colour picker

        expect(createColourPicker(null)).to.equal(undefined);
        expect(createColourPicker(<any>{})).to.equal(undefined);
        expect(createColourPicker(<any>
            {
                elements: { selector: '.non-existent-div' }
            })).to.equal(undefined);
    });
});




// describe('format detection', () =>
// {
//     it('should gracefully handle invalid values during creation', () =>
//     {
//         expect(getTextFormat()).to.equal(undefined);
//         // expect(createKwillEditor({selector: 'asd' })).to.equal(undefined);
//     });
// });