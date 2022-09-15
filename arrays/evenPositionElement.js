

function evenPositionElement(arr){
    let temp = "";

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            temp += `${arr[i]} `;
        }
    }

    console.log(temp);

}

evenPositionElement(['20', '30', '40', '50', '60'])