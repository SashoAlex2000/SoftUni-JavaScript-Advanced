

function sameNumbers(number){
    number = number.toString();
    let stringNumber = number.split("");
    let areSame = true;
    let firstNum = stringNumber.shift();
    let totalSum  = Number(firstNum);

    for (let num of stringNumber) {
        totalSum += Number(num)
        if (num != firstNum) {
            areSame = false;
        }
    }
    
    console.log(areSame);
    console.log(totalSum);

}

sameNumbers(2222222)
sameNumbers(1234)