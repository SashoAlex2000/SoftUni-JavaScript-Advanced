const {expect} = require('chai');

const { createCalculator } = require('./addAndSubstract');


describe ('Testing calculator', () => {


    it ('should have a working getter method', () => {
        let testCalculator = createCalculator();

        let result = testCalculator.get();

        expect(result).to.be.equal(0);
    })

    it ('should add number when the add function is called', () => {
        let testCalculator = createCalculator();

        testCalculator.add(13);

        let result = testCalculator.get();

        expect(result).to.be.equal(13);
    })

    it ('should add number when the add function is called, second test', () => {
        let testCalculator = createCalculator();

        testCalculator.add(-2);

        let result = testCalculator.get();

        expect(result).to.be.equal(-2);
    })

    it ('should subract number when the subtract function is called', () => {
        let testCalculator = createCalculator();

        testCalculator.subtract(2);

        let result = testCalculator.get();

        expect(result).to.be.equal(-2);
    })

    it ('should subract number when the subtract function is called, second test', () => {
        let testCalculator = createCalculator();

        testCalculator.add(13);
        testCalculator.subtract(2);

        let result = testCalculator.get();

        expect(result).to.be.equal(11);
    })

    it ('should subract number when the subtract function is called, third test', () => {
        let testCalculator = createCalculator();

        testCalculator.subtract(-10);

        let result = testCalculator.get();

        expect(result).to.be.equal(10);
    })

})