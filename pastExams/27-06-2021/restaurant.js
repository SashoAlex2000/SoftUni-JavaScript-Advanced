

class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;

        this.menu = {

        };
        this.stockProducts = {

        };
        this.history = [

        ];

    }

    loadProducts(arrayOfProducts) {
        let currentProducts = [];

        for (let line of arrayOfProducts) {

            let shredded = line.split(' ');
            let [name, quantity, productTotalPrice] = [shredded[0], Number(shredded[1]), Number(shredded[2])];

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= productTotalPrice;

                currentProducts.push(`Successfully loaded ${quantity} ${name}`);
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
            else {
                currentProducts.push(`There was not enough money to load ${quantity} ${name}`);
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
            
        }

        return currentProducts.join('\n')

    }

    addToMenu(meal, neededProducts, price) {

        if (this.menu.hasOwnProperty(meal)) {
            
            return `The ${meal} is already in the our menu, try something different.`;

        }else {
            let newObj ={
                products: neededProducts,
                price: price,
            }

            this.menu[meal] = newObj;

            if (this.menu.length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else {
                return `Great idea! Now with the ${meal} we have ${(Object.keys(this.menu)).length} meals in the menu, other ideas?`
            }

        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length < 1) {
            return `Our menu is not ready yet, please come later...`;
        }else {
            let result = ``;

            for (let [key, value] of Object.entries(this.menu)) {
                result += `${key} - $ ${value.price}\n`;
            }
            result = result.trim();
            return result
        }
    }

    makeTheOrder(mealName) {

        if (!this.menu.hasOwnProperty(mealName)) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        }else {
            let neededProducts = this.menu[mealName].products;
            let moneyReceived = this.menu[mealName].price
            let enough = true;

            for (let pair of neededProducts) {
                let shredded = pair.split(' ');

                let [name, quantity] = [shredded[0], Number(shredded[1])];

                if (!this.stockProducts.hasOwnProperty(name)){
                    enough = false;
                    break;
                }else {
                    if (this.stockProducts[name] < quantity) {
                        enough = false; 
                        break;
                    }
                }

            }
            
            if (enough === false) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }else {
                for (let pair of neededProducts) {
                    let shredded = pair.split(' ');
    
                    let [name, quantity] = [shredded[0], Number(shredded[1])];

                    this.stockProducts[name] -= quantity;
                }

                this.budgetMoney += moneyReceived;

                return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${moneyReceived}.`
            }

        }

    }
    

}

let testRestaurant = new Restaurant(1000);

console.log(testRestaurant.loadProducts(['meat 50 250', 'onions 50 35', 'meat 20 20', 'carrots 15 5']))
console.log(testRestaurant.budgetMoney)

console.log(testRestaurant.stockProducts)

for (thing of Object.entries(testRestaurant.stockProducts)) {
    console.log(thing)

}
console.log(testRestaurant.history)

console.log(testRestaurant.addToMenu('frozen pizza', ['frozenPizza 1', 'ketchup 1'], 10));
console.log(testRestaurant.addToMenu('Soup', ['bolion 1', 'chicken 1', 'vegetables 2'], 15));
console.log(testRestaurant.addToMenu('frozen pizza', ['frozenPizza 1', 'ketchup 1'], 10));
console.log(testRestaurant.addToMenu('meat stew', ['meat 5', 'onions 10', 'carrots 12'], 25));


for (let item in testRestaurant.menu) {
    console.log(item)
}

console.log(testRestaurant.showTheMenu())
console.log(testRestaurant.makeTheOrder('strawberry souffle'))
console.log(testRestaurant.makeTheOrder('frozen pizza'))

console.log(testRestaurant.budgetMoney)
console.log(testRestaurant.makeTheOrder('meat stew'))
console.log(testRestaurant.budgetMoney)
for (thing of Object.entries(testRestaurant.stockProducts)) {
    console.log(thing)

}

console.log('*'.repeat(15))
console.log('SoftUni test inputs')
console.log('*'.repeat(15))

// test input 1 
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// test input 2&3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

// test input 4
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
