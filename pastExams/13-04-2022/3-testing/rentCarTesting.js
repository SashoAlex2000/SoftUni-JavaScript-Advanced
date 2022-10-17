const { rentCar } = require('./rentCar');

const { expect, should } = require('chai');
const { assert } = require('chai');


describe("Tests which test the functionality of the rentCar object", function() {
    describe("Testing the search car functionality", function() {
        it("should throw an error if the first part of the input is invalid", function() {
            assert.throw(() => {
                rentCar.searchCar('not an array', 'Toyota')
            }, "Invalid input!")
        });

        it("should throw an error if the second part of the input is invalid", function() {
            assert.throw(() => {
                rentCar.searchCar(['Toyota'], {
                    searchedCard: 'Kia Sportage'
                })
            }, "Invalid input!")
        });

        it ("should return the correct information if the input is valid and there is such model", () => {
            
            let result = rentCar.searchCar(["Mercedes", 'Toyota', "Mercedes", "Kia"], "Mercedes");

            expect(result).to.be.equal("There is 2 car of model Mercedes in the catalog!")
        })

        it ("should return the correct information if the input is valid and there is such model,vol2", () => {
            
            let result = rentCar.searchCar(["Mercedes", 'Toyota', "Mercedes", "Kia"], "Kia");

            expect(result).to.be.equal("There is 1 car of model Kia in the catalog!")
        })

        it ("should throw a specific error if the input is valid but thereis no sucj model", () => {

            assert.throw(() => {
                rentCar.searchCar(["Mercedes", 'Toyota', "Mercedes", "Kia"], "BMW")
            }, "There are no such models in the catalog!");

        })
        
     });
    
     describe("Testing the functionality of the calculatePriceOfCar", () => {

        it ("should throw an error if the first input is invalid", () => {
            assert.throw(() => {
                rentCar.calculatePriceOfCar(['not', 'a', 'number'], 13)
            }, "Invalid input!")
        })

        it ("should throw an error if the second input is invalid", () => {
            assert.throw(() => {
                rentCar.calculatePriceOfCar('Mercedes', {
                    type: 'Integer!'
                })
            }, "Invalid input!")
        })

        it ("should return the correct output if the inputs are correct", () => {

            let result = rentCar.calculatePriceOfCar('Mercedes', 3);

            expect(result).to.be.equal('You choose Mercedes and it will cost $150!')

        });

        it ("should return the correct output if the inputs are correct, vol. 2", () => {

            let result = rentCar.calculatePriceOfCar('Audi', 2);

            expect(result).to.be.equal('You choose Audi and it will cost $72!')

        });

        it ("should throw a specific error if the model is not in the catalogue", () => {

            assert.throw(() => {
                rentCar.calculatePriceOfCar('Kia', 2)
            }, "No such model in the catalog!")

        })

     })

    describe("Test which test the checkBudger functionality of the object", () => {

        it ("should throw an error if the first input is incorrect", () => {

            assert.throw(() => {
                rentCar.checkBudget('string', 2, 3)
            }, "Invalid input!")
        
        });

        it ("should throw an error if the second input is incorrect", () => {

            assert.throw(() => {
                rentCar.checkBudget(10, [2, 4, 'double'], 3)
            }, "Invalid input!")
        
        });

        it ("should throw an error if the third input is incorrect", () => {

            assert.throw(() => {
                rentCar.checkBudget(10, 2, 3.14)
            }, "Invalid input!")
        
        });

        it ("should return the the correct output if we have enough money", () => {

            let result = rentCar.checkBudget(30, 10, 420);

            expect(result).to.be.equal("You rent a car!")

        })

        it ("should return the the correct output if we do not have enough money", () => {

            let result = rentCar.checkBudget(30, 10, 282);

            expect(result).to.be.equal("You need a bigger budget!")

        })

    })

});
