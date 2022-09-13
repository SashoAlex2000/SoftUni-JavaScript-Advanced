

function largestNumber(firstNum, secondNum, thirdNum){
    let result;
    
    let check = firstNum > secondNum && firstNum > thirdNum ? result = firstNum : false;
    if (!check){
        result = secondNum > thirdNum ? secondNum : thirdNum;
    }

    console.log(`The largest number is ${result}.`);

}

largestNumber(10,40,300)