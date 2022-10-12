const {expect} = require('chai');

const { isOddOrEven } = require('./evenOrOdd');

describe('Testing the Odd or Even function', () => {

    it ('should return undefined if the type of the passed paramenter is not of type string', () => {

        //Arrange and Act
        let result = isOddOrEven(3);

        //Asset
        expect(result).to.be.undefined;
    })

    it ('should return undefined if the input is incorrect, vol. 2', () => {
        let result = isOddOrEven({
            name: "Wrong type, fool!"
        })

        expect(result).to.be.undefined;
    })

    it ('should return undefined if the input is incorrect, vol. 3', () => {
        let result = isOddOrEven([1,2,'3'])

        expect(result).to.be.undefined;
    })

    it ('should give return even if the sting is of even length', () => {
        let result = isOddOrEven('even');

        expect(result).to.be.equal('even');
    })

    it ('should give return even if the sting is of even length, vol.2', () => {
        let result = isOddOrEven('someevenstring');

        expect(result).to.be.equal('even');
    })

    it ('should return odd if the length of the string is odd', () => {
        let result = isOddOrEven('odd');

        expect(result).to.be.equal('odd')
    })

    it ('should return odd if the length of the string is odd, vol.2', () => {
        let result = isOddOrEven('seven');

        expect(result).to.be.equal('odd')
    })


})

