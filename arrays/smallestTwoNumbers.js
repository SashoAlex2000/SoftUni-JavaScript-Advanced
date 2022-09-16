

function smallestTwoNumbers(arr){
    let sortedArr = arr.sort((a,b) => a - b);
    let result = [];

    let first = sortedArr.shift();
    let second = sortedArr.shift();

    result.push(first);
    result.push(second);

    console.log(result.join(" "))
}

smallestTwoNumbers([30, 15, 50, 5])