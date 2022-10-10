

function subSum(array, startIndex, ednIndex) {
    let result = 0;

    if (!Array.isArray(array)){
        return NaN;
    }


    if (startIndex < 0) {
        startIndex = 0;
    }
    if (ednIndex > array.length - 1) {
        ednIndex = array.length - 1;
    }

    for (let i = startIndex; i <= ednIndex; i++) {
        result += Number(array[i]);
    }

    return result;
}


let firstTest = subSum([10, 20, 30, 40, 50, 60], 3, 300);
console.log(firstTest);

let secondTest = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
console.log(secondTest);

let thirdTest = subSum('asd', -3, 1);
console.log(thirdTest);

let fourthTest = subSum([10, 'twenty', 30, 40], 0, 2);
console.log(fourthTest)