

function storeCatalogue(array) {

    let result = {

    }

    for (let element of array) {
        let shreeded = element.split(":");
        let [currentProduct, currPrice] = [shreeded[0], Number(shreeded[1])];

        let letter = currentProduct[0];

        if (result[letter] === undefined) {
            result[letter] = {
            }
        }
        result[letter][currentProduct] = currPrice;

    }

    let entries = Object.entries(result);
    entries.sort();
    result = Object.fromEntries(entries);

    for (let key in result) {
        console.log(`${key.toUpperCase()}`);
        let entries = Object.entries(result[key]);
        entries.sort((a,b) => a[0].localeCompare(b[0]));

        for (let double of entries) {
            console.log(`  ${double[0].trim()}: ${double[1]}`);
        }


    }

}


storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


)

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)