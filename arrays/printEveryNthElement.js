

function printEveryNthElement(array, space){
    let result = [];

    for (let i = 0 ; i < array.length; i += space){
        result.push(array[i]);
    }

    return result;
}

console.log(printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))

console.log(printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
))
console.log(printEveryNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2

))