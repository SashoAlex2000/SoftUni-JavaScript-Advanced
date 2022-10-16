const {expect} = require('chai');
const {assert} = require('chai');

const { carService } = require('./carService');

describe("Tests which are testing the carService function", () =>{
    describe("Testing the isItExpensive fucntion", function() {

        it("should return a special string if the issue is Engine", function() {
            // Arrange, Act, Assert

            let result = carService.isItExpensive('Engine');

            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money');

        });

        it("should return a special string if the issue is Transmission", function() {
            // Arrange, Act, Assert

            let result = carService.isItExpensive('Transmission');

            expect(result).to.be.equal('The issue with the car is more severe and it will cost more money');

        });

        it ("should return a general message if the issue is of any other type", () => {

            let result = carService.isItExpensive('Tires');

            expect(result).to.be.equal('The overall price will be a bit cheaper');

        });

        it ("should return a general message if the issue is of any other type, vol. 2", () => {

            let result = carService.isItExpensive('Oil leakage');

            expect(result).to.be.equal('The overall price will be a bit cheaper');

        });

     });

    

    describe("Testing the functionality of the discount function", () => {

        it ("should throw an error if the first input is not of type Number" , () => {

            assert.throw(function(){carService.discount('asd', 13)}, 'Invalid input')
        });

        it ("should throw an error if the second input is not of type Number" , () => {

            assert.throw(function(){carService.discount(10,{ 

            })}, 'Invalid input')
        });

        it ("should return You cannot apply a discount if the parts are less or euqal than 2", () => {

            let result = carService.discount(1, 10);

            expect(result).to.be.equal('You cannot apply a discount')

        })

        it ("should return some discount applied for parts less than 7", () => {
            let result = carService.discount(5, 100);

            expect(result).to.be.equal("Discount applied! You saved 15$")

        })

        it ("should return some discount applied for parts less than 7, vol. 2", () => {
            let result = carService.discount(6, 50);

            expect(result).to.be.equal("Discount applied! You saved 7.5$")

        })

        it ("should return some discount applied for parts more than 7", () => {
            let result = carService.discount(10, 100);

            expect(result).to.be.equal("Discount applied! You saved 30$")

        })

        it ("should return some discount applied for parts more than 7, vol. 2", () => {
            let result = carService.discount(133, 250);

            expect(result).to.be.equal("Discount applied! You saved 75$")

        })

    })

    describe('Testing the partsToBuy functionality', ()=> {

        it ("should throw an error if the first argument is not of type array", () => {
            assert.throw(function(){carService.partsToBuy(10,[])}, 'Invalid input')
        });

        it ("should throw an error if the second argument is not of type array", () => {
            assert.throw(function(){carService.partsToBuy([{part: 'valve',
            price: 15}],'definetely not an array')}, 'Invalid input')
        });

        it ("should return 0 if the parts catalog is empty", () => {
            let result = carService.partsToBuy([{part: 'valve',
            price: 15}], []);

            expect(result).to.be.equal(0)
        })

        it("should return the correct sum if the inputs are valid", () => {

            let result = carService.partsToBuy([{part: 'valve',
            price: 15}], ['valve']);

            expect(result).to.be.equal(15)

        })

        it("should return the correct sum if the inputs are valid, vol. 2", () => {

            let result = carService.partsToBuy([{part: 'valve',
            price: 15}, {part: 'exhaust pipe', price: 55}], ['valve', 'exhaust pipe']);

            expect(result).to.be.equal(70)

        })

    })
});
