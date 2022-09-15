

function lastKNumberSequence(n , k){
    let array = [1];

    while (array.length < n){
        let deter = Math.max(0, array.length - k);

        let currentNum = 0;

        for (let i = deter; i < array.length; i++){
            currentNum += array[i];
        }

        array.push(currentNum);
    }
    return (array)
}

console.log(lastKNumberSequence(6, 3))
console.log(lastKNumberSequence(8, 2))