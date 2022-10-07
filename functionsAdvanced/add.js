

function solution(num) {
    let counter = num;

    function newFunc(newNum) {
        return counter + newNum;
    }

    return newFunc;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
