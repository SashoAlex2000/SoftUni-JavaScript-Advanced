

function argumentInfo(...args) {

    let typesObj = {

    };

    for (let arg of args) {
        let currentType = typeof arg;
        console.log(`${currentType}: ${arg}`)
        if (!typesObj.hasOwnProperty(currentType)) {
            typesObj[currentType] = 0;
        }

        typesObj[currentType] += 1;
    }

    let entries = Object.entries(typesObj);

    entries.sort((a,b) => b[1] - a[1]);

    for (let [key, value] of entries) {
        console.log(`${key} = ${value}`)
    }


}


argumentInfo('cat', 42, 24, function () { console.log('Hello world!'); })