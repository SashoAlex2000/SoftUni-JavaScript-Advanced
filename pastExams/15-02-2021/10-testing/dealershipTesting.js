

const { dealership } = require('./dealership');

const { assert } = require('chai');
const { expect } = require('chai');


describe("testing the funtionality of the dealership object …", function() {
    describe("testing the functionality of the newCarCost function", function() {

        it("it should return the same price if the model is not one of the listed ones", function() {
            
            let result = dealership.newCarCost('Audi A3', 15000);

            expect(result).to.be.equal(15000)

        });

        it("it should return the appropirate discounted price if the model is one of the listed ones", function() {
            
            let result = dealership.newCarCost('Audi A4 B8', 35000);

            expect(result).to.be.equal(20000)

        });

        it("it should return the appropirate discounted price if the model is one of the listed ones, second model", function() {
            
            let result = dealership.newCarCost('Audi A6 4K', 35000);

            expect(result).to.be.equal(15000)

        });

        it("it should return the appropirate discounted price if the model is one of the listed ones, third model", function() {
            
            let result = dealership.newCarCost('Audi A8 D5', 35000);

            expect(result).to.be.equal(10000)

        });

        it("it should return the appropirate discounted price if the model is one of the listed ones, fourth model", function() {
            
            let result = dealership.newCarCost('Audi TT 8J', 35000);

            expect(result).to.be.equal(21000)

        });

    });

    describe ('testing the car equipment functionality of the object', () => {

        it ('should add the correct extras into the final array', () => {

            let result = dealership.carEquipment(['nitro', 'spoiler', 'ultra bass'], [0, 2]);

            expect(result).to.be.eql(['nitro', 'ultra bass'])

        });

        it ('should add the correct extras into the final array, second test', () => {

            let result = dealership.carEquipment(['nitro', 'spoiler', 'ultra bass'], [0, 1, 2]);

            expect(result).to.be.eql(['nitro', 'spoiler', 'ultra bass'])

        });

        it ('should add the correct extras into the final array, third test', () => {

            let result = dealership.carEquipment(['nitro', 'spoiler', 'ultra bass'], [0]);

            expect(result).to.be.eql(['nitro'])

        });

    });

    describe('testing the functionality of the euroCategory function of the object', () => {

        it ('should return discounted price if the category is right', () => {

            let result = dealership.euroCategory(4);

            expect(result).to.be.equal("We have added 5% discount to the final price: 14250.")

        });

        it ('should return that there is no discount if the category is too low', () => {

            let result = dealership.euroCategory(2);

            expect(result).to.be.equal("Your euro category is low, so there is no discount from the final price!")

        });

    })
     
});
