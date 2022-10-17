const { flowerShop } = require('./flowerShop');

const { assert } = require('chai');
const { expect } = require('chai');


describe("Tests which test the functionality of the flowerShop object", function () {
    describe("testing the calcPriceOfFlowers funcionality", function () {

        it("should throw an Error if the first input is invalid", function () {

            assert.throw(() => {
                flowerShop.calcPriceOfFlowers(13, 13, 13)
            }, "Invalid input!");

        });

        it("should throw an Error if the second input is invalid", function () {

            assert.throw(() => {
                flowerShop.calcPriceOfFlowers('rose', [13, 14], 13)
            }, "Invalid input!");

        });

        it("should throw an Error if the third input is invalid", function () {

            assert.throw(() => {
                flowerShop.calcPriceOfFlowers('rose', 15, { name: '13' })
            }, "Invalid input!");

        });

        it("should return the final price if the provided inputs are correct", () => {

            let result = flowerShop.calcPriceOfFlowers('rose', 6, 10);

            expect(result).to.be.equal('You need $60.00 to buy rose!')

        })

    });

    describe('testing the funcionality of the checkFlowersAvailable', () => {

        it ("should return that the flower is available if it is ", () => {

            let result = flowerShop.checkFlowersAvailable('rose', ['dafodill', 'rose', 'tullip'])

            expect(result).to.be.equal('The rose are available!')
        })

        it ("should return that the flower is not available if it isnt ", () => {

            let result = flowerShop.checkFlowersAvailable('Lilly', ['dafodill', 'rose', 'tullip'])

            expect(result).to.be.equal('The Lilly are sold! You need to purchase more!')
        })

    })

    describe ('testing the functionality of the sellFlowers', () => {

        it ("should throw an error if the first input is invalid", ()=> {
            assert.throw(() => {
                flowerShop.sellFlowers('not an array', 13)
            }, "Invalid input!")
        });

        it ("should throw an error if the second input is invalid", ()=> {
            assert.throw(() => {
                flowerShop.sellFlowers([], 'not an integer')
            }, "Invalid input!")
        });

        it ("should throw an error if the second input is too small", ()=> {
            assert.throw(() => {
                flowerShop.sellFlowers([], -5)
            }, "Invalid input!")
        });

        it ("should throw an error if the second input is bigger than the arr length", ()=> {
            assert.throw(() => {
                flowerShop.sellFlowers(['rose', 'dafodil'], 5)
            }, "Invalid input!")
        });

        it ("should return the correct input if all the parameters are right", () => {

            let result = flowerShop.sellFlowers(['rose', 'lilly', 'tulip', 'dafodill'], 2);

            expect(result).to.be.equal('rose / lilly / dafodill')

        })

    })

});
