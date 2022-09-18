

function magicMatrices(matrx){

    let isMagic = true;
    let rowSums = [];
    let colSums = [];


    for (let row of matrx){
        let currentRowSum = 0;
        for (let element of row){
            currentRowSum += element;
        }
        rowSums.push(currentRowSum);
    }
    let rowSet = new Set(rowSums);
    if (rowSet.size > 1) {
        isMagic  = false;
    }

    if (isMagic == true){
        for (let i = 0; i < matrx[0].length; i++){
            let currentColSum = 0;
            for (let n =0; n < matrx.length; n++){
                currentColSum += matrx[n][i];
            }
            colSums.push(currentColSum);
        }
    }

    let colSet = new Set(colSums);
    if (colSet.size > 1) {
        isMagic  = false;
    }

    console.log(isMagic);

}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )