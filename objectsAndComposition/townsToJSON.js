

function townsToJSON(array) {
    array.shift();
    let result = [];

    for (let element of array) {    

        let shredded = element.split("|");
        shredded.shift()

        let [currCity, currLan, currLon] = [shredded[0].trim(), Number(shredded[1].trim()).toFixed(2), Number(shredded[2].trim()).toFixed(2)];

        let currObj = {
            Town: currCity,
            Latitude: Number(currLan),
            Longitude: Number(currLon)
        }

        result.push(currObj);

    }

    console.log(JSON.stringify(result));
}


townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)