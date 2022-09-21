

function janNotation(array){

    let numbers = [];

    function operationsRepo(sign,a ,b) {
        if (sign == "+"){
            return a + b;
        }else if (sign == "-"){return a-b}
        else if (sign == "*"){return  a*b}
        else if (sign == "/"){return a/b};
    }   

    for (let element of array){
        if (isNaN(element) === false) {
            numbers.push(element);
            // console.log(numbers)

        }
        else{
            if (numbers.length < 2){
                console.log("Error: not enough operands!");

            }
            let secondNum = numbers.pop();
            let firstNum = numbers.pop();
            let result = operationsRepo(element, firstNum, secondNum);
            numbers.push(result)
            // console.log(numbers)
        }
    }

    if (numbers.length > 1){
        console.log("Error: too many operands!")
    }else {
        if (isNaN(numbers[0]) === false){
            console.log(numbers[0])
        }
    }
}


janNotation([3,
    4,
    '+']
   )

janNotation([5,
    3,
    4,
    '*',
    '-']
   )
janNotation([15,
    '/']
   )

janNotation([7,
    33,
    8,
    '-']
   )