

function spiralMatrix(heigth, width){
    
    let matrix = []
    for (let b = 0; b < heigth; b++) {
        let curr = [];
        for (let c = 0;  c < width; c++) {
            curr.push(0);
        }
        matrix.push(curr);
    }

    function checkForOneZero(zeroMatrix) {
        let zeroCounter = 0;
        for (let row of zeroMatrix){
            for (let element of row){
                if (element == 0){
                    zeroCounter += 1;
                }
            }
        }
        return zeroCounter;
    }

    let counter = 1;
    let rowStart = 0;
    let rowEnd = width - 1;
    let colStart = 0;
    let colEnd = heigth -1;

    while (checkForOneZero(matrix) > 1) {

        for (let f = colStart; f <= colEnd; f++) {
            matrix[rowStart][f] = counter;
            counter ++;
        }

        for (let s = rowStart + 1; s <= rowEnd; s ++) {
            matrix[s][colEnd] = counter;
            counter ++;
        }

        for (let t = colEnd - 1; t >= colStart; t--){
            matrix[rowEnd][t] = counter;
            counter ++;
        }

        for (let e = rowEnd - 1; e > rowStart; e--){
            matrix[e][colStart] = counter;
            counter ++;
        }
        
        rowStart ++;
        rowEnd --;
        colStart ++;
        colEnd --;
        // for (let row of matrix) {
        //     console.log(row);
        // }
        // console.log("*************")
    }
    // console.log(`${rowStart} ${rowEnd} ${colStart} ${colEnd}`);
    if (checkForOneZero(matrix) == 1){
        matrix[rowStart][rowEnd] = counter;
    }
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

// spiralMatrix(5, 5)
spiralMatrix(3, 3)

spiralMatrix(4, 4)