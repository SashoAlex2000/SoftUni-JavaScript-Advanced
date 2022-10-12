

const {expect} = require('chai');

const {lookupChar} = require('./charLookUp');


describe('A function to test the functionality of a CharLookUp function', () => {

    it ('should return undefined if the first value passed is not of type string', () => {

        let result = lookupChar([], 3);

        expect(result).to.be.undefined
    })

    it('should return undefined when a non-string is passed, vol. 2', () => {

        let result = lookupChar(3,14, 3);

        expect(result).to.be.undefined;
    })

    it('should return undefined when a non-int is passed as the index', () => {

        let result = lookupChar('string', []);

        expect(result).to.be.undefined
    })

    it('should return undefined when a non-int is passed as the index, vol. 2', () => {

        let result = lookupChar('string', 'index');

        expect(result).to.be.undefined
    })

    it('should return undefined when a float is passed as the index', () => {

        let result = lookupChar('string', 3.14);

        expect(result).to.be.undefined
    })

    it('should return undefined when a int is passed, but the the first param is not a string ', () => {

        let result = lookupChar({
            name: 'hmm'
        }, 2);

        expect(result).to.be.undefined
    })

    it('should return Incorrect index message when an incorrect index is passed ', () => {

        let result = lookupChar('string', -13);

        expect(result).to.be.equal('Incorrect index')
    })

    it('should return Incorrect index message when an incorrect index is passed, vol. 2 ', () => {

        let result = lookupChar('string', 100);

        expect(result).to.be.equal('Incorrect index')
    })

    it('should return the correct character if all the parameters passed in are adequate', () => {

        let result = lookupChar('string', 0);

        expect(result).to.be.equal('s');

    })

    it('should return the correct character if all the parameters passed in are adequate, vol. 2', () => {

        let result = lookupChar('string', 1);

        expect(result).to.be.equal('t');

    })

    it('should return the correct character if all the parameters passed in are adequate, vol. 3', () => {

        let result = lookupChar('something', 6);

        expect(result).to.be.equal('i');

    })

})

