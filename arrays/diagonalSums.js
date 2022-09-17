

function diagonalSums(metaArr){

    let firstSum = 0;
    let secondSum = 0;

    let firstIndex = 0;
    let secondIndex = metaArr.length - 1;

    for (let i = 0; i < metaArr.length; i++){
        firstSum += metaArr[i][firstIndex];
        secondSum += metaArr[i][secondIndex];
        firstIndex ++;
        secondIndex --;
    }

    console.log(firstSum + " " + secondSum);

}

diagonalSums([[20, 40],
    [10, 60]]
   )

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )