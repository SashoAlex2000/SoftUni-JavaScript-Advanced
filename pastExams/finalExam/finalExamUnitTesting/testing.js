

const { chooseYourCar } = require('./chooseYourCar');

const{ expect } = require('chai')
const{ assert } = require('chai')


describe("TEsting the chooseCarObject…", function() {
    describe("choosingType", function() {


        it("throw an error if year is too far back", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('sedan', 'blue', 1889)
            }, "Invalid Year!")
        });

        it("throw an error if year is too far back 2", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('sedan', 'blue', 1568)
            }, "Invalid Year!")
        });

        it("throw an error if the year is in the future", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('sedan', 'blue', 2025)
            }, "Invalid Year!")
        });

        it("throw an error if the year is in the future 2", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('sedan', 'blue', 3000)
            }, "Invalid Year!")
        });

        it ('should return that it meets the measurments if the sedan is new enough', () => {

            let result = chooseYourCar.choosingType('Sedan', 'red', 2015);

            expect(result).to.be.equal('This red Sedan meets the requirements, that you have.')

        })

        it ('should return that it meets the measurments if the sedan is new enough 2', () => {

            let result = chooseYourCar.choosingType('Sedan', 'red', 2010);

            expect(result).to.be.equal('This red Sedan meets the requirements, that you have.')

        })

        it ('should return that it doesnt meets the measurments if the sedan is not new enough', () => {

            let result = chooseYourCar.choosingType('Sedan', 'red', 2005);

            expect(result).to.be.equal('This Sedan is too old for you, especially with that red color.')

        })

        it ('should return that it doesnt meets the measurments if the sedan is not new enough 2', () => {

            let result = chooseYourCar.choosingType('Sedan', 'red', 2009);

            expect(result).to.be.equal('This Sedan is too old for you, especially with that red color.')

        })

        it("throw an error if the car is not a sedan", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('not a sedan', 'blue', 2005)
            }, "This type of car is not what you are looking for.")
        });

        it("throw an error if the car is not a sedan 2", function() {
            assert.throw(() => {
                chooseYourCar.choosingType('pickup', 'blue', 1998)
            }, "This type of car is not what you are looking for.")
        });

    });
    
    describe ('testing the brandName functionality ' ,() => {

        it ('should throw an error if the brands is not an array', () => {
            assert.throw(() => {
                chooseYourCar.brandName('not an array', 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the brands is not an array 2', () => {
            assert.throw(() => {
                chooseYourCar.brandName({
                    type: [
                        'array'
                    ]
                }, 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is not a number', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], [{
                    name: 'number'
                }])
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is not a number 2', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 3.154)
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is not a number 3', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], '5')
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is less than 0', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], -13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is less than 0, vol .2', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], -1)
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is bigger than arr.length', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 5)
            }, "Invalid Information!")
        })

        it ('should throw an error if the index is bigger than arr.length 2', () => {
            assert.throw(() => {
                chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 3)
            }, "Invalid Information!")
        })

        it ('should return the brands which are not at the specified index', () => {

            let result = chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 1);

            expect(result).to.be.equal('BMW, Kia')


        })

        it ('should return the brands which are not at the specified index, vol. 2', () => {

            let result = chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 0);

            expect(result).to.be.equal('Mercedes, Kia')


        })

        it ('should return the brands which are not at the specified index, vol. 3', () => {

            let result = chooseYourCar.brandName(['BMW', 'Mercedes', 'Kia'], 2);

            expect(result).to.be.equal('BMW, Mercedes')


        })

    })

    describe ('testing the carFuelConsumption functionality' ,() => {


        it ('should throw an error if the distance is not a number', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption('distance', 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the distance is not a number 2', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption('100', 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the distance is a negative number', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(-50, 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the distance is a negative number 2', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(-1, 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the distance is a negative number 3', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(0, 13)
            }, "Invalid Information!")
        })

        it ('should throw an error if the conspumtion is not a number', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(50000, ['consumption', 3.14])
            }, "Invalid Information!")
        })

        it ('should throw an error if the conspumtion is not a number 2', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(50000, '3.14')
            }, "Invalid Information!")
        })

        it ('should throw an error if the conspumtion is a negative number', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(50000, -15)
            }, "Invalid Information!")
        })

        it ('should throw an error if the conspumtion is a negative number 2', () => {
            assert.throw(() => {
                chooseYourCar.carFuelConsumption(50000, 0)
            }, "Invalid Information!")
        })

        it ('should return the that the car is efficient if it is and if the inputs are correct' , () => {

            let result = chooseYourCar.carFuelConsumption(100, 7);

            expect(result).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.")

        })

        it ('should return the that the car is efficient if it is and if the inputs are correct 2' , () => {

            let result = chooseYourCar.carFuelConsumption(100, 5.58);

            expect(result).to.be.equal("The car is efficient enough, it burns 5.58 liters/100 km.")

        })

        it ('should return the that the car is efficient if it is and if the inputs are correct 3' , () => {

            let result = chooseYourCar.carFuelConsumption(10, 0.01);

            expect(result).to.be.equal("The car is efficient enough, it burns 0.10 liters/100 km.")

        })

        it ('should return the that the car is inefficient if it is and if the inputs are correct' , () => {

            let result = chooseYourCar.carFuelConsumption(100, 16.3);

            expect(result).to.be.equal("The car burns too much fuel - 16.30 liters!")

        })

        it ('should return the that the car is inefficient if it is and if the inputs are correct 2' , () => {

            let result = chooseYourCar.carFuelConsumption(100, 7.01);

            expect(result).to.be.equal("The car burns too much fuel - 7.01 liters!")

        })


    })

    

});
