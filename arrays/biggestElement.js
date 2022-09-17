

function biggestElement(metaArray){

    let biggest = -999999999;

    for (let row of metaArray){
        for (let element of row){
            if (element > biggest){
                biggest = element;
            }
        }
    }
    console.log(biggest);

}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )

