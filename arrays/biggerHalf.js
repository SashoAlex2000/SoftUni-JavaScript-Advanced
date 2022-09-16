

function biggerHalf(arr){
    let newArr = arr.sort((a,b) => a - b);

    let result = newArr.slice(newArr.length / 2);

    return (result);

}

console.log(biggerHalf([4, 7, 2, 3, 5]))