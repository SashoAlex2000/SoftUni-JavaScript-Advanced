

class Garden {

    constructor (spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired <= 0) {
            throw new Error("Not enough space in the garden.")
        }
        let plantObj = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push(plantObj);
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let isFound = false;

        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                isFound = true;
            }
        }

        if (isFound === false) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                if (plant.ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`)
                }
                if (quantity <= 0) {
                    throw new Error("The quantity cannot be zero or negative.")
                }

                plant.ripe = true;
                plant.quantity += quantity;
                if (quantity === 1) {
                    return `${quantity} ${plantName} has successfully ripened.`
                }
                else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }

            }
        }

    }

    harvestPlant(plantName) {
        let isFound = false;
        let magicIndex = -1;

        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName === plantName) {
                isFound = true;
                magicIndex = i;
            }
        }

        if (isFound === false) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        let currentPlant = this.plants[magicIndex];
        if (currentPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let newPlant = {
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity,
        }

        this.spaceAvailable += currentPlant.spaceRequired;
        this.storage.push(newPlant);
        this.plants.splice(magicIndex, 1);

        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\n`;

        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));

        let plantNames = [];
        this.plants.forEach(x => plantNames.push(x.plantName));

        result += `Plants in the garden: ` + plantNames.join(', ') + '\n';

        if (this.storage.length === 0) {
            result += "Plants in storage: The storage is empty.\n";
        }else {
            result += 'Plants in storage: '
            
            let storageNames = [];
            this.storage.forEach(x => storageNames.push([x.plantName, x.quantity]));

            for (let arr of storageNames) {
                result +=  `${arr[0]} (${arr[1]}) `
            }
        }
        result = result.trim();

        return result;
    }

}


let testGarden = new Garden(50);

console.log(testGarden.plants);

// console.log(testGarden.addPlant('Rose', 120))
console.log(testGarden.addPlant('Zflower', 2))
console.log(testGarden.addPlant('Rose', 25))
console.log(testGarden.addPlant('Aflower', 1))
console.log(testGarden.spaceAvailable)

for (let plant of testGarden.plants) {
    console.log(plant)
}

// console.log(testGarden.ripenPlant('Rose', 1))
// for (let plant of testGarden.plants) {
//     console.log(plant)
// }

console.log(testGarden.ripenPlant('Rose', 11))
for (let plant of testGarden.plants) {
    console.log(plant)
}
console.log(testGarden.harvestPlant('Rose'))
for (let plant of testGarden.plants) {
    console.log(plant)
}
for (let plant of testGarden.storage) {
    console.log(plant)
}

console.log(testGarden.generateReport())

console.log('**********************')

// test input 1 
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// test input 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// test input 3
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));


// test input 4
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));


// test input 5
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));


