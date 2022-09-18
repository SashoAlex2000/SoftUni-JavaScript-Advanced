

function sortingNumbers(array){
    array.sort((a,b) => a-b);
    let result = [];
    let arrLength = array.length;

    for (let i = 0; i <= arrLength - 1; i+=2){
        result.push(array.shift());
        result.push(array.pop());
    }
    return (result)
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))