

function townPopulation(array) {
    let cities = {
        
    };

    for (let line of array){
        let shredded = line.split(" <-> ");
        let [currentCity, currentPopulation] = [shredded[0], Number(shredded[1])];

        if (cities[currentCity] === undefined) {
            cities[currentCity] = 0;
        }
        cities[currentCity] += currentPopulation;
    }

    for (let key in cities) {
        console.log(`${key}: ${cities[key]}`);
    };

}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)