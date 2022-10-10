const {expect} = require('chai');


//given function to test
function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe('isSymmetric', () => {

    it ('should return false when the provided input is not an array', () => {
        let array = 'This is definitely not an array!';

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it ('should return true when it is given a symmetric array', () => {
        let array = [1,4,13,4,1];

        let result = isSymmetric(array);

        expect(result).to.be.true;
    })

    it ('should be false when it is given an array which is not symmetrical', () => {
        let array = [1,2,3,13,37];

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it ('once again should give false when the array is not symmetric', () => {
        let array = [1,2,3333,1859523,37];

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it (' should give false when the array is not symmetric for the third time', () => {
        let array = [1,2];

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it ('should return true when it is given a symmetric array even with strings', () => {
        let array = [1,4,'13','word','13',4,1];

        let result = isSymmetric(array);

        expect(result).to.be.true;
    })

    it ('should return false when the provided input is not an array, second test', () => {
        let array = 13;

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it ('should return false when the provided input is not an array, third test', () => {
        let array = {
            name:'Test'
        };

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

    it ('should return false when the provided input is not an array, fourth test', () => {
        let array = 3.14;

        let result = isSymmetric(array);

        expect(result).to.be.false;
    })

})

