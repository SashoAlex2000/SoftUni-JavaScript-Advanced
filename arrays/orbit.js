

function orbit(arr){
    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];

    let matrix = [];

    for (let b = 0; b < height; b++) {
        let curr = [];
        for (let c = 0;  c < width; c++) {
            curr.push(0);
        }
        matrix.push(curr);
    }

    function checkForZero(checkMatrix) {
        let hasZero = false;
        for (let row of checkMatrix){
            for (let element of row){
                if (element == 0){
                    hasZero = true;
                    break;

                }
            }
        }
        return hasZero;
    }

    let counter = 1;
    let stopper = 0;

    while (checkForZero(matrix) === true){
        if (counter == 1){
            matrix[x][y] = counter;
        }else{
            let rowStart = Math.max(0, (x - counter + 1));
            let rowEnd = Math.min(width - 1, (x + counter - 1));
            // console.log(`${rowStart} ${rowEnd}`);

            let colStart = Math.max(0, (y - counter + 1));
            let colEnd = Math.min(width - 1, (y + counter - 1));
            // console.log(`${colStart} ${colEnd}`);


            for (let r = rowStart; r <= rowEnd; r++) {
                for (let c = colStart; c <= colEnd; c++) {
                    if (matrix[r][c] == 0){
                        matrix[r][c] = counter;
                    }
                }
            }
        }
        counter ++;
        stopper ++;
        // console.log(counter)
        if (stopper == 20){
            break;
        }
        // for (let row of matrix){
        //     console.log(row);
        // }
        // console.log("*****************")
    }


    for (let row of matrix){
        console.log(row.join(" "));
    }

}


orbit([4, 4, 0, 0])
orbit([5, 5, 2, 2]

    )

orbit([3, 3, 2, 2])