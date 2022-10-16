const { bookSelection } = require('./bookSection')

const { expect } = require('chai')
const { assert } = require('chai')


describe("Tests tests about the bookSelection object and its functionlaity", function() {

    describe("tests about the isSuitable function", function() {

        it("should return a certain message when the book is not suitable - Horror", function() {
            let result = bookSelection.isGenreSuitable('Horror', 11);

            expect(result).to.be.equal('Books with Horror genre are not suitable for kids at 11 age')

        });

        it("should return a certain message when the BOOK is not suitable - Thriller", function() {
            let result = bookSelection.isGenreSuitable('Thriller', 5);

            expect(result).to.be.equal('Books with Thriller genre are not suitable for kids at 5 age')

        });

        it ("should return that the books are suitable if the inputs are correct", () => {
            let result = bookSelection.isGenreSuitable('Thriller', 15);

            expect(result).to.be.equal("Those books are suitable")

        })

        it ("should return that the books are suitable if the inputs are correct, vlo. 2", () => {
            let result = bookSelection.isGenreSuitable('Romance', 7);

            expect(result).to.be.equal("Those books are suitable")

        })

     });

    describe("Testing the isItAffordable functionality of the object", () => {

        it ("should throw an error if the price in the input is incorrect", () => {

            assert.throw(() => {
                bookSelection.isItAffordable('price', 100)
            }, "Invalid input")

        });

        it ("should throw an error if the budget in the input is incorrect", () => {

            assert.throw(() => {
                bookSelection.isItAffordable(100, ['unicorn', {
                    budge: 1000
                }])
            }, "Invalid input")

        })

        it ("should return that we dont have money if the price is bigger than the budget", () => {
            let result = bookSelection.isItAffordable(100, 75);

            expect(result).to.be.equal("You don't have enough money")
        })

        it ("should return that we have bought the book if the budget is sufficient", () => {
            let result = bookSelection.isItAffordable(100, 175);

            expect(result).to.be.equal("Book bought. You have 75$ left")
        })

    })

    describe ("Testing the suitableTitles functionality of the object", () => {

        it ("should throw an error if the first input is not an array", () => {
            assert.throw(() => {
                bookSelection.suitableTitles('not an array', 'thriller')
            }, 'Invalid input');
        })

        it ("should throw an error if the wanted title is not of type string", () => {
            assert.throw(() => {
                bookSelection.suitableTitles([], 3.14)
            }, "Invalid input")
        })

        it ('should return the correct output if the inputs are valid', () => {

            let result = bookSelection.suitableTitles([{title: "East Of Eden", genre: "Fiction"},
            {title: "Frankenstein", genre: 'Gothic fiction'}], 'Fiction');

            // expect(result).to.be.equal(['Frankenstein'])
            assert.equal('East Of Eden', result[0])

        })

        it ('should return the correct output if the inputs are valid, vol. 2', () => {

            let result = bookSelection.suitableTitles([{title: "East Of Eden", genre: "Fiction"},
            {title: "Frankenstein", genre: 'Gothic fiction'}], 'Gothic fiction');

            // expect(result).to.be.equal(['Frankenstein'])
            assert.equal('Frankenstein', result[0])

        })

    })
});
