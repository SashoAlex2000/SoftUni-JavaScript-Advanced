const {expect} = require('chai');

const { rgbToHexColor } = require('./rgbToHex');


describe ('RGB values to Hex func', () => {

    it ('should throw an error if the red value is wrong', () => {
        let testValues = ['not a number', 15,167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the red value is below 0', () => {
        let testValues = [-125, 15,167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the red value is above 255', () => {
        let testValues = [2000, 15,167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the green value is not a number', () => {
        let testValues = [17, 'green color', 167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the green value is below 0', () => {
        let testValues = [100, -15,167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the green value is above 255', () => {
        let testValues = [200, 1555,167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the blue value is not a number', () => {
        let testValues = [17, 169, 'not valid'];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the green value is below 0', () => {
        let testValues = [100, 15, -167];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should throw an error if the green value is above 255', () => {
        let testValues = [200, 155,1677];

        let result = rgbToHexColor(...testValues);

        expect(result).to.be.undefined;
    })

    it ('should return correct output if the right input is provided', () => {
        let testValues = [200,16,178];

        let result = rgbToHexColor(...testValues)

        expect(result).to.be.equal('#C810B2')
    })

    it ('should return correct output if the right input is provided, second test', () => {
        let testValues = [10,168,254];

        let result = rgbToHexColor(...testValues)

        expect(result).to.be.equal('#0AA8FE')
    })

    it ('should return correct output if the right input is provided, boundary values', () => {
        let testValues = [0,0,0];

        let result = rgbToHexColor(...testValues)

        expect(result).to.be.equal('#000000')
    })

    it ('should return correct output if the right input is provided, boundary values, second test', () => {
        let testValues = [255,255,255];

        let result = rgbToHexColor(...testValues)

        expect(result).to.be.equal('#FFFFFF')
    })

})

