
class LibraryCollection {

    constructor (capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error("Not enough space in the collection.");
        }

        let currentBookObject = {
            bookName,
            bookAuthor,
            payed: false
        }
        this.books.push(currentBookObject);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook (bookName) {

        for (let book of this.books) {

            if (book.bookName === bookName) {
                if (book.payed === true) {
                    throw new Error(`${bookName} has already been paid.`)
                }else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
            
        }

        throw new Error(`${bookName} is not in the collection.`)

    }

    removeBook (bookName) {

        for (let i = 0; i < this.books.length; i++) {

            let book = this.books[i]
            if (book.bookName === bookName) {
                if (book.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }else {
                    this.books.splice(i, 1);
                    return `${bookName} remove from the collection.`
                }
            }

        }

        throw new Error("The book, you're looking for, is not found.");

    }

    getStatistics(bookAuthor="default") {

        if (bookAuthor === "default") {

            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;

            let sortedBooks = this.books;
            sortedBooks.sort((a,b) => a.bookName.localeCompare(b.bookName));

            for (let book of sortedBooks) {
                result += `${book.bookName} == ${book.bookAuthor} - ${book.payed?"Has Paid":"Not Paid"}.\n`
            }
            result = result.trim();

            return result;

        }else {

            for (let book of this.books) {
                if (book.bookAuthor === bookAuthor) {
                    return `${book.bookName} == ${book.bookAuthor} - ${book.payed?"Paid":"Not Paid"}.`
                }
            }

            throw new Error(`${bookAuthor} is not in the collection.`)

        }


    }

}

let testLibrary = new LibraryCollection(5);
console.log(testLibrary.addBook('East of Eden', 'John Steinback'));
console.log(testLibrary.addBook('Inferno', 'Dan Brown'));
console.log(testLibrary.addBook('Crime And Punishment', 'Dostoevsky'));
console.log(testLibrary.addBook('Alice in Wonderland', 'Lewis Caroll'));

for (let book of testLibrary.books) {
    console.log(book)
}

console.log(testLibrary.payBook('East of Eden'))
// console.log(testLibrary.payBook('Grapes of Wrath'))
// console.log(testLibrary.payBook('East of Eden'))

console.log(testLibrary.removeBook("East of Eden"))
// console.log(testLibrary.removeBook("Inferno"))
// console.log(testLibrary.removeBook("East of Eden"))

console.log(testLibrary.getStatistics())
console.log(testLibrary.getStatistics("Lewis Caroll"))
// console.log(testLibrary.getStatistics("Lewis"))
//
console.log('***********************')
console.log('SoftUni Test Inputs');
console.log('***********************')
//
// test input 1 
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// test input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// test input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// test input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// test input 5
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
