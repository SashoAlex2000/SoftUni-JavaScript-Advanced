

function squareOfStars(size = 5){
    let stars = "";

    for (let i =0; i < size; i++){
        let temp = "";

        for (let n =0; n < size; n++){
            temp += "* ";
        }

        temp = temp.trim();

        stars += temp;
        stars += '\n';
    }

    console.log(stars);
}

squareOfStars()