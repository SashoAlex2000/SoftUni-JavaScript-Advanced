

function solution() {

    let stockedMicroElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }


    }

    return (string) => {
        let shredded = string.split(" ");
        if (shredded[0] === 'restock') {
            stockedMicroElements[shredded[1]] += Number(shredded[2]);
            // console.log(stockedMicroElements)
            return 'Success'
        } else if (shredded[0] === 'prepare') {
            let recipeName = shredded[1];
            let quantity = Number(shredded[2]);

            let neededProducts = recipies[recipeName];
            // console.log(neededProducts);
            let entries = Object.entries(neededProducts);
            for (let arr of entries) {
                arr[1] = arr[1] * quantity
                // console.log(arr[1])
            }
            let isEnough = true;
            let missingProdcut;
            for (let [key, value] of entries) {
                if (stockedMicroElements[key] < value) {
                    isEnough = false;
                    missingProdcut = key;
                    break;
                }
            }
            if (isEnough === true) {
                for (let [key, value] of entries) {
                    stockedMicroElements[key] -= value;
                }
                // console.log(stockedMicroElements)
            }
            return isEnough ? 'Success' : `Error: not enough ${missingProdcut} in stock`
        } else {
            return `protein=${stockedMicroElements['protein']} carbohydrate=${stockedMicroElements['carbohydrate']} fat=${stockedMicroElements['fat']} flavour=${stockedMicroElements['flavour']} `
        }

    }
}

let manager = solution();
// console.log (manager ("restock flavour 50")); 
// console.log (manager ("restock carbohydrate 50")); 
// console.log (manager ("prepare lemonade 1")); 
// console.log (manager ("prepare lemonade 4")); 
// console.log(manager('report'))

let instructions = ["restock flavour 50", "prepare lemonade 4", "restock carbohydrate 10",
    "restock flavour 10",
    "prepare apple 1",
    "restock fat 10",
    "prepare burger 1",
    "report",
]

for (let c of instructions) [
    console.log(manager(c))
]

let secondManager = solution();

let secondInstructions = [
    "prepare turkey 1",
    "restock protein 10",
    "prepare turkey 1",
    "restock carbohydrate 10",
    "prepare turkey 1",
    "restock fat 10",
    "prepare turkey 1",
    "restock flavour 10",
    "prepare turkey 1",
    "report"
]
console.log('SECOND TEST: ')
for (let c of secondInstructions) {
    console.log(secondManager(c));
}