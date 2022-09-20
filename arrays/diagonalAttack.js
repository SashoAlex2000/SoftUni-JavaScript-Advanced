

function diagonalAttack(initialMatrix){

    let matrix = [];

    for (let i = 0; i < initialMatrix.length; i++){
        let shredded = initialMatrix[i].split(" ");
        matrix.push(shredded);
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let firstIndex = 0;
    let secondIndex = matrix.length - 1;

    for (let row of matrix){
        firstDiagonalSum += Number(row[firstIndex]);
        secondDiagonalSum += Number(row[secondIndex]);


        firstIndex ++;
        secondIndex --;
    }


    if (firstDiagonalSum != secondDiagonalSum){
        for (let row of matrix){
            console.log(row.join(" "))
        }
    }else{
        let firstCounter = 0;
        let secondCounter = matrix.length - 1;

        for (let i =0; i < matrix.length; i++){
            for (let n = 0; n < matrix.length; n++){
                if (n !== firstCounter && n !== secondCounter){
                    matrix[i][n] = firstDiagonalSum;
                }
            }
            firstCounter ++;
            secondCounter --;
        }
        for (row of matrix){
            console.log(row.join(" "));
        }
    }

}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']

)