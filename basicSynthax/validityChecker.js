

function validityChecker(x1, y1, x2, y2){

    function calcSum(firstX, secondX, firstY, secondY){
        return Math.sqrt(Math.pow((secondX - firstX), 2) + Math.pow((secondY -firstY), 2));
    }

    let firstCond = calcSum(x1, 0, y1, 0) % 1 == 0 ? "valid" : "invalid";
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstCond}`);

    let secondCond = calcSum(x2, 0, y2, 0) % 1 == 0 ? "valid" : "invalid";
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondCond}`);

    let thirdCond = calcSum(x1, x2, y1, y2) % 1 == 0 ? "valid" : "invalid";
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdCond}`);
    

}

validityChecker(3, 0, 0, 4)

validityChecker(2, 1, 1, 1)