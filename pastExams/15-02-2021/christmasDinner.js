

class ChristmasDinner  {

    constructor (budget) {

        this.budget = budget;
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }

        this.dishes = [

        ];
        this.products = [

        ];
        this.guests = {

        };
    }

    // get budget() {
    //     return this._budget;
    // }

    // set budget(value) {

    //     if (value < 0) {
    //         console.log('negative')
    //         throw new Error('The budget cannot be a negative number')
    //     } 
    //     console.log('test')

    //     this._budget = value * 2;

    // }

    shopping (arrayOfProducts) {

        // let shredded = arrayOfProducts[0].split(' ');
        let price = Number(arrayOfProducts[1]);
        let productName = arrayOfProducts[0];

        // let [productName, price] = [shredded[0], Number(shredded[1])];
        console.log(price)
        console.log(productName)

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.budget -= price;

        this.products.push(productName);
        
        return `You have successfully bought ${productName}!`;
    }


    recipes(recipe) {

        let name = recipe.recipeName;
        let list = recipe.productsList

        let enough = true;

        for (let product of list) {
            if (this.products.indexOf(product) < 0) {
                enough = false;
            }
        }

        if (!enough) {
            throw new Error("We do not have this product");
        }

        let newObj = {
            recipeName: name,
            productsList: list,
        }

        this.dishes.push(newObj);

        return `${name} has been successfully cooked!`;


    }

    inviteGuests(name, dish) {

        let dishExists = false;

        for (let existingDish of this.dishes) {

            if (existingDish.recipeName === dish) {
                dishExists = true;
            }
        }

        if (!dishExists) {
            throw new Error('We do not have this dish')
        }

        if (this.guests.hasOwnProperty(name) === true) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';

        for (let [key, value] of Object.entries(this.guests)) {

            let currentProducts;

            for (let dish of this.dishes) {
                if (dish.recipeName === value) {
                    currentProducts = dish.productsList;
                }
            }
            
            result += `${key} will eat ${value}, which consists of ${currentProducts.join(', ')}\n`
        }

        result = result.trim();

        return result;

    }

}



let testDinner = new ChristmasDinner(150);
console.log(testDinner.budget)


// console.log(testDinner.shopping(['banana 225']));
console.log(testDinner.shopping(['banana', '25']));
console.log(testDinner.shopping(['sugar', '5']));
console.log(testDinner.shopping(['eggs', '20']));
console.log(testDinner.shopping(['flour', '20']));
console.log(testDinner.shopping(['beef', '30']));
console.log(testDinner.shopping(['stock', '5']));
console.log(testDinner.shopping(['spices', '5']));
console.log(testDinner.shopping(['vegetables', '15']));

console.log(testDinner.budget)
console.log(testDinner.products)

// testDinner.recipes({
//     recipeName: 'test',
//     productsList: ['banana4e']
// })

console.log(testDinner.recipes({
    recipeName: 'banana pancakes',
    productsList: ['banana', 'eggs', 'flour', 'sugar']
}))

console.log(testDinner.recipes({
    recipeName: 'beef stew',
    productsList: ['beef', 'stock', 'spices', 'vegetables']
}))

for (let dish of testDinner.dishes) {
    console.log(dish)
}

// console.log(testDinner.recipes({
//     recipeName: 'banana pankes DELUXE',
//     productsList: ['banana', 'eggs', 'flour', 'sugar', 'vanilla essence', 'milk']
// }))

console.log(testDinner.inviteGuests('Alex', 'banana pancakes'))
// console.log(testDinner.inviteGuests('Alex', 'banana pancakes'))
console.log(testDinner.inviteGuests('John', 'beef stew'))


console.log(testDinner.guests)
console.log(testDinner.showAttendance())


console.log('*'.repeat(15))
console.log('SoftUni test inputs')
console.log('*'.repeat(15))

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
