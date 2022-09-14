

function aggregateElements(arr){
    let totalSum = 0;
    let inverseSum = 0
    let concat = "";

    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];
        inverseSum += (1 / arr[i]);
        concat += arr[i];
    }

    console.log(totalSum);
    console.log(inverseSum);
    console.log(concat);

}

aggregateElements([1, 2, 3])

aggregateElements([2, 4, 8, 16])