

class Stringer {
    constructor(innerString , innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    decrease(num) {
        this.innerLength -= num;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }

    }

    increase(num) {
        this.innerLength += num;
    }

    toString() {
        // let copiedString = this.innerString.substring(0, this.innerString.length - 1 - this.innerLength);
        let copiedString = this.innerString.substring(0, this.innerLength);

        if (copiedString.length < this.innerString.length) {
            copiedString = copiedString + "...";
        }

        return copiedString;
    }


}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...
// console.log(test.innerLength) // Te...

// test.decrease(5);
// console.log(test.toString()); // ...
// console.log(test.innerLength) // Te...


// test.increase(4); 
// console.log(test.toString()); // Test
// console.log(test.innerLength) // Te...


// **********
// console.log(test.innerString)
// console.log(test.innerLength)

// test.decrease(2);

// console.log(test.innerString)
// console.log(test.innerLength)

// console.log(test.toString())

// **********


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
