

function sumOfNumberNtoM(n,m){
    let totalSum = 0;

    for (let i =Number(n); i <= Number(m); i++){
        totalSum += i;
    }

    console.log(totalSum);

}

sumOfNumberNtoM('-8', '20')
sumOfNumberNtoM('-80', '2000')