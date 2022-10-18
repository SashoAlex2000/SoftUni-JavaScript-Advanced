

class VegetableStore {

    constructor (owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    // loadingVegetables
    loadingVegetables (vegetables) {
        let currUnique = [];

        for (let vegetable of vegetables) {
            let shredded = vegetable.split(' ');
            let [type, quantity, price] = [shredded[0], Number(shredded[1]), Number(shredded[2])];

            let exists = false;

            for (let product of this.availableProducts) {

                if (product.type === type) {
                    product.quantity += quantity;
                    if (price > product.price) {
                        product.price = price;
                    }
                    exists = true;
                }

            }

            if (!exists) {
                let currentObject = {
                    type,
                    quantity, 
                    price,
                }
                this.availableProducts.push(currentObject);
            }

            if (currUnique.indexOf(type) < 0) {
                currUnique.push(type);
            }

        }

        return 'Successfully added ' + currUnique.join(', ');

    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0;

        for (let pair of selectedProducts) {
            let shredded = pair.split(' ')
            let [vegetable, quantity] = [shredded[0], Number(shredded[1])];
            let exists = false;
            for (let product of this.availableProducts) {

                if (product.type === vegetable) {
                    if (product.quantity < quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${vegetable} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }else {
                        totalPrice += quantity * product.price;
                        product.quantity -= quantity;
                        exists = true;
                    }
                }
                
            }

            if (!exists) {
                throw new Error(`${vegetable} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;

    }

    rottingVegetable(type, quantity) {

        for (let vegetable of this.availableProducts) {
            if (vegetable.type === type) {

                if (vegetable.quantity <=quantity) {
                    vegetable.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                }else {
                    vegetable.quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`
                }

            }
        }
        throw new Error(`${type} is not available in the store.`)

    }

    revision() {

        let result = "Available vegetables:\n";

        let orderedVegetables = this.availableProducts.sort((a,b) => a.price - b.price);

        for (let vegetable of orderedVegetables) {
            result += `${vegetable.type}-${vegetable.quantity}-$${vegetable.price}\n`
        }

        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return result;

    }

}


let testShop = new VegetableStore('Alex Malinov', "Mladost 1");

console.log(testShop.loadingVegetables(['beetroot 10 1', 'cabbage 20 2']));
console.log(testShop.loadingVegetables(['carrots 25 0.5', 'cabbage 50 2.5', 'carrots 30 1']));
console.log(testShop.availableProducts)

for (let product of testShop.availableProducts) {
    console.log(product)
}

// console.log(testShop.buyingVegetables(['carrots 20', 'tomatoes 20']))
// console.log(testShop.buyingVegetables(['carrots 20', 'cabbage 80']));
console.log(testShop.buyingVegetables(['carrots 25', 'cabbage 50']));

for (let product of testShop.availableProducts) {
    console.log(product)
}

// console.log(testShop.rottingVegetable('cucumber', 20))
console.log(testShop.rottingVegetable('carrots', 30))
console.log(testShop.rottingVegetable('cabbage', 10))

for (let product of testShop.availableProducts) {
    console.log(product)
}

console.log(testShop.loadingVegetables(['tomato 25 2.1', 'cucumber 200 3', 'onions 100 0.5']));


console.log(testShop.revision())

console.log('******************')
console.log('SoftUni test inputs')
console.log('******************')

//test input 1 
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


//test input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

//test input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

//test input 4
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
