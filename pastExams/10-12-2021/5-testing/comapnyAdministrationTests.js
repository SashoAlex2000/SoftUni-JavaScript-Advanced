

const { companyAdministration } = require('./companyAdministration');

const { assert } = require('chai')
const { expect } = require('chai')


describe ('testing the functionality of the comoanyAdministraion object', () => {

    describe('testing the hireEmployee functionality', () => {

        it ('should throw an error if the position is anyhting but a programmer', () => {

            assert.throw(() => {
                companyAdministration.hiringEmployee('Chris', 'CFO', 15)
            }, 'We are not looking for workers for this position.')

        })

        it ('should reject the programmer if their years of experience are insufficient', () => {

            let result = companyAdministration.hiringEmployee('Alex', 'Programmer', 2);

            expect(result).to.be.equal('Alex is not approved for this position.')

        })

        it ('should approve the programmer if their years of experience are suffucient', () => {

            let result = companyAdministration.hiringEmployee('Alex', 'Programmer', 4);

            expect(result).to.be.equal('Alex was successfully hired for the position Programmer.')

        })

    })

    describe('testing the calculateSalary functionality of the object', () => {

        it ('should throw an error if the hours passed are not a number', () => {

            assert.throw(() => {
                companyAdministration.calculateSalary('not a number')
            }, "Invalid hours");

        });

        it ('should throw an error if the hours passed are a negative number', () => {

            assert.throw(() => {
                companyAdministration.calculateSalary(-13)
            }, "Invalid hours");

        });

        it ('should return the correct calculated salary with valid input', () => {

            let result = companyAdministration.calculateSalary(100);

            expect(result).to.be.equal(1500)
            
        })

        it ('should return the correct calculated salary premium for overtime with valid input', () => {

            let result = companyAdministration.calculateSalary(200);

            expect(result).to.be.equal(4000)
            
        })

    })

    describe('testing the firedEmployee functionality', () => {

        it ('should throw an error if the employees input is not an Array', () => {
            assert.throw(() => {
                companyAdministration.firedEmployee('not an array', 2)
            }, "Invalid input")
        });

        it ('should throw an error if the index input is not an Number', () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(['Ivan', 'Peter'], 'definetely not a number')
            }, "Invalid input")
        });

        it ('should throw an error if the index input is a negative number', () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(['Ivan', 'Peter'], -10)
            }, "Invalid input")
        });

        it ('should throw an error if the index input is a higher than the length of the array', () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(['Ivan', 'Peter'], 3)
            }, "Invalid input")
        });

        it ('should return the correct output if the provided inputs are valud', () => {

            let result = companyAdministration.firedEmployee(['Ivan', 'Petar', 'Alex'], 1);

            expect(result).to.be.equal('Ivan, Alex')

        })

        it ('should return the correct output if the provided inputs are valud, vol. 2', () => {

            let result = companyAdministration.firedEmployee(['Ivan', 'Petar', 'Alex'], 0);

            expect(result).to.be.equal('Petar, Alex')

        });

        it ('should return the correct output if the provided inputs are valud, vol. 3', () => {

            let result = companyAdministration.firedEmployee(['Ivan', 'Petar', 'Alex'], 2);

            expect(result).to.be.equal('Ivan, Petar')

        });

    })

})

