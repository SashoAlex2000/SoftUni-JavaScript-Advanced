

function calorieObject(array) {

    let obj = {

    };

    for (let i = 0; i < array.length - 1; i+= 2) {
        let currentFood = array[i];
        let currentCalories = array[i+1];

        obj[currentFood] = Number(currentCalories);
    }

    console.log(obj);


}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])