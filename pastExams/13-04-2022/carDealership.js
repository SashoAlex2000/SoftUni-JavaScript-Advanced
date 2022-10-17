

class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars  = [];
        this.soldCars  = [];
        this.totalIncome = 0;

    }

    addCar(model, horsepower, price, mileage) {
        if (model === '') {
            throw new Error("Invalid input!");
        }
        if (!Number.isInteger(horsepower)) {
            throw new Error("Invalid input!");
        }
        if (horsepower < 0) {
            throw new Error("Invalid input!");
        }
        if (isNaN(price) || isNaN(mileage)) {
            throw new Error("Invalid input!");
        }
        if (price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let currentObj = {
            model, horsepower, price, mileage
        }

        this.availableCars.push(currentObj);

        return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${price.toFixed(2)}$`;

    }

    sellCar(model, desiredMileage) {
        let magicIndex = -1;
        let sellingPrice

        for (let i = 0; i < this.availableCars.length; i++) {
            let car = this.availableCars[i]
            if (car.model === model) {
                magicIndex = i;
                sellingPrice = car.price
                if (car.mileage <= desiredMileage) {
                    //pass
                }else if(car.mileage > desiredMileage && car.mileage <= desiredMileage + 40000) {
                    sellingPrice *= 0.95;
                }else if (car.mileage > desiredMileage + 40000) {
                    sellingPrice *= 0.90;
                }

                let soldCarObj = {
                    model: car.model,
                    horsepower: car.horsepower,
                    soldPrice: sellingPrice,
                };

                this.soldCars.push(soldCarObj);
                break;
            }
        }

        if (magicIndex >= 0) {
            this.availableCars.splice(magicIndex, 1);
            this.totalIncome += sellingPrice;
            return `${model} was sold for ${sellingPrice.toFixed(2)}$`;

        }else {
            return `${model} was not found!`
        }

    }

    currentCar() {

        if (this.availableCars.length ===0) {
            return "There are no available cars"
        }

        let result = "-Available cars:\n"

        for (let car of this.availableCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        }

        result = result.trim()
        
        return result
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model"){
            throw new Error("Invalid criteria!")
        }

        if (criteria === 'horsepower') {
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }
        else if (criteria === 'model') {
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        result += `-${this.soldCars.length} cars sold:\n`

        for (let car of this.soldCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`
        }
        result = result.trim()
        
        return result;

    }

}


let testDealership = new CarDealership('Kia Motors'); 

console.log(testDealership.addCar('Kia Sportage', 175, 30000, 100000))
console.log(testDealership.addCar('Audi A4', 185, 5800, 200000))
console.log(testDealership.addCar('TESLA Model S', 225, 65000, 11000))
console.log(testDealership.addCar('Toyota Corrola', 110, 3500, 85000))
console.log(testDealership.addCar('Fiat Punto', 69, 5000, 48500))

for (let car of testDealership.availableCars) {
    console.log(car);
}

console.log(testDealership.sellCar('Mercedes CLK', 80000))
console.log(testDealership.sellCar('Kia Sportage', 45000))
console.log(testDealership.sellCar('Toyota Corrola', 100000))
console.log(testDealership.sellCar('Fiat Punto', 0))
console.log(testDealership.sellCar('TESLA Model S', 10000))


for (let car of testDealership.availableCars) {
    console.log(car);
}

console.log(testDealership.totalIncome)
console.log(testDealership.currentCar())


for (let car of testDealership.soldCars) {
    console.log(car);
}

console.log(testDealership.salesReport("model"))

console.log("*****************************")


//test input 1 
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

//test input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

//test input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

//test input 4
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
