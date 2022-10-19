

const { library } = require('./library');

const{ assert } = require('chai');
const{ expect } = require('chai');


describe("Testing the functionality of the library object …", function() {
    describe("testing the  calcPriceOfBook function", function() {
        it("it should  throw an error if the name of the book is invalid", function() {
            
            assert.throw(() => {
                library.calcPriceOfBook(['not', 'a', 'string'], 1999)
            }, "Invalid input");

        });

        it("it should  throw an error if the name of the book is invalid, vol. 2", function() {
            
            assert.throw(() => {
                library.calcPriceOfBook({
                    name:'book 1'
                }, 1999)
            }, "Invalid input");

        });

        it ("should throw an error if the quantity is invalid", () => {
            assert.throw(() => {
                library.calcPriceOfBook('Great Gatsby', 'not a number')
            }, "Invalid input")
        })

        it ("should throw an error if the quantity is an invalid number", () => {
            assert.throw(() => {
                library.calcPriceOfBook('Great Gatsby', 3.14)
            }, "Invalid input")
        })

        it ("should return the correct price for if the inputs are correct", () => {

            let result = library.calcPriceOfBook('Inferno', 2013);

            expect(result).to.be.equal('Price of Inferno is 20.00');

        })

        it ("should return the correct price for if the inputs are correct, vol. 2", () => {

            let result = library.calcPriceOfBook('The Lyncoln Lawyer', 2005);

            expect(result).to.be.equal('Price of The Lyncoln Lawyer is 20.00');

        })

        it ("should return the correct discounter price for an older book", () => {

            let result = library.calcPriceOfBook('The Dogs Of War', 1974);

            expect(result).to.be.equal('Price of The Dogs Of War is 10.00');

        });

        it ("should return the correct discounter price for an older book, vol. 2", () => {

            let result = library.calcPriceOfBook('The Master and Margarita', 1933);

            expect(result).to.be.equal('Price of The Master and Margarita is 10.00');

        })

     });
    
    describe("Testing the functionality if the findBook function of the object", () => {

        it ("should throw an error if the book array is 0", () => {
            assert.throw(() => {
                library.findBook([], 'Great Gatsby')
            }, "No books currently available")
        });

        it ("should throw an error if the book array is 0, vol 2", () => {
            assert.throw(() => {
                library.findBook('', 'Great Gatsby')
            }, "No books currently available")
        });

        it ('should return a negative response if the book is not in the array', () => {

            let result = library.findBook(['Indero', 'All quiet on the Western front', 'Crime and Punishment'], 'Pride and Prejudice');
            
            expect(result).to.be.equal("The book you are looking for is not here!")

        });

        it ('should return a negative response if the book is not in the array.vol. 2', () => {

            let result = library.findBook(['Indero', 'All quiet on the Western front', 'Crime and Punishment'], 'Trainspotting');
            
            expect(result).to.be.equal("The book you are looking for is not here!")

        })

        it("should return a positive response if the book is found", () => {

            let result = library.findBook(['Indero', 'All quiet on the Western front', 'Crime and Punishment'], 'Indero');

            expect(result).to.be.equal("We found the book you want.")
        });

        it("should return a positive response if the book is found, vol. 2", () => {

            let result = library.findBook(['Indero', 'All quiet on the Western front', 'Crime and Punishment'], 'Crime and Punishment');

            expect(result).to.be.equal("We found the book you want.")
        })

    })

    describe('testing the arrangeBook Functionality of the object', () => {

        it ('should throw an error if non-integer is passed in the input', () => {

            assert.throw(() => {
                library.arrangeTheBooks('integer ;)')
            }, 'Invalid input')

        });

        it ('should throw an error if non-integer is passed in the input, vol. 2', () => {

            assert.throw(() => {
                library.arrangeTheBooks(3.14)
            }, 'Invalid input')

        });

        it ('should throw an error if non-integer is passed in the input, vol. 3', () => {

            assert.throw(() => {
                library.arrangeTheBooks([3.14])
            }, 'Invalid input')

        });

        it ('should throw an error if negatie integer is passed in the input', () => {

            assert.throw(() => {
                library.arrangeTheBooks(-6)
            }, 'Invalid input')

        });
        
        it ("should return a positive message if the books have been arranged", () => {

            let result = library.arrangeTheBooks(32)

            expect(result).to.be.equal("Great job, the books are arranged.")
        })

        it ("should return a negative message if the books have not been arranged", () => {

            let result = library.arrangeTheBooks(42)

            expect(result).to.be.equal("Insufficient space, more shelves need to be purchased.")
        })

    })

});


