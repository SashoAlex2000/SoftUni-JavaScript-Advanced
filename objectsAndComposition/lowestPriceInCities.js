

function lowestPriceInCities(array) {
    let result ={

    }

    for (let sequence of array) {
        let shredded = sequence.split(" | ");
        let [townName, currentProduct, currPrice] = [shredded[0], shredded[1], Number(shredded[2])];

        if (result[currentProduct] === undefined) {
            result[currentProduct] = {
                city: townName,
                price: currPrice
            }

        }else {
            if (result[currentProduct].price > currPrice) {
                result[currentProduct].price = currPrice;
                result[currentProduct].city = townName;
            }
        }

    }

    for (let key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].city})`);
    }

}

lowestPriceInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
