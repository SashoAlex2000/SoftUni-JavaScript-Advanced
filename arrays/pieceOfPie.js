

function pieceOfPie(array, firstEl, secondEl){
    let firstIndex = array.indexOf(firstEl);
    let secondIndex = array.indexOf(secondEl);
    let result = [];

    for (let i = firstIndex; i <= secondIndex; i++){
        result.push(array[i]);
    }

    return result;

}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))