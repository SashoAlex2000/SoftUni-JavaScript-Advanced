

function fruit(fruitType, weight, price){
    
    weight /= 1000;

    let totalPrice = weight * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);

}


fruit('orange', 2500, 1.80);

fruit('apple', 1563, 2.35);