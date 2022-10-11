

function autoEngineeringCompany(arr) {
    let cars = {

    };

    for (let element of arr) {
        let shredded = element.split(" | ");
        let [brand, model, carsProduced] = [shredded[0], shredded[1], Number(shredded[2])];

        if (!cars.hasOwnProperty(brand)) {
            let currentObj = {
                
            }
            currentObj[model] = carsProduced
            cars[brand] = currentObj;
        }else{

            if (!cars[brand].hasOwnProperty(model)){
                cars[brand][model] = carsProduced;
            }else {
                cars[brand][model] += carsProduced;
            }

        }
    }
    // console.log(cars)
    for (let [key, value] of Array.from(Object.entries(cars))) {
        console.log(key)
        for (let [brand, quantity] of Object.entries(value)){
            console.log(`###${brand} -> ${quantity}`);
        }
    }

}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)