

function extractIncreasingSubset(array){
    let result = [];
    result.push(array.shift());

    for (let i = 0; i < array.length; i++){
        let currentNumber = array[i];
        if (currentNumber >= result[result.length-1]){
            result.push(currentNumber);
        }
    }
    return result;
}

console.log(extractIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))
console.log(extractIncreasingSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))