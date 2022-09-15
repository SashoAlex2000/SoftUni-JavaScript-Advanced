

function greatesCommonDivisor(first, second){
    let GCD = 0;

    let smallerNumber = first > second ? second:first;

    for (let i =0; i <= smallerNumber; i++){
        if (first % i == 0 && second % i == 0){
            GCD = i;
        }
    }
    console.log(GCD);
}

greatesCommonDivisor(15 , 5)

greatesCommonDivisor(2154, 458)