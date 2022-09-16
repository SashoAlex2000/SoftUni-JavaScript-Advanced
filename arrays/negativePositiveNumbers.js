

function negativePositiveNumbers(array){
    let result = [];

    for (let num of array){
        if (num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    console.log(result.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])