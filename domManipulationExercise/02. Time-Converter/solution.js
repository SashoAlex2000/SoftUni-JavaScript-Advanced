
function attachEventsListeners() {

    // console.log('TODO:...');

    let divs = document.getElementsByTagName('div');

    console.log(divs)

    for (let div of divs) {
        // console.log(div.children[2]);
        div.children[2].addEventListener('click', convertingTime);
    }

    function convertingTime(event) {
        console.log("ITS CONVERTING TIME")
        // console.log(event.target.parentElement);
        // console.log(event.target.parentElement.children[0].textContent);

        let currentTarget = event.target.parentElement.children[0].textContent.trim();

        let currentUnits = Number(event.target.parentElement.children[1].value);
        console.log(currentTarget)
        console.log(currentUnits)

        let table = {
            'Days:': 1,
            'Hours:': 24,
            'Minutes:': 1440,
            'Seconds:': 86400,
        }

        let bodies = document.getElementsByTagName('div');
        console.log(bodies);

        let multiplier = 1;
        if (currentTarget === 'Days:'){
            console.log('IN THE LOOP')
            multiplier = currentUnits / 1;
        }else if(currentTarget === 'Hours:') {
            let days = currentUnits / 24;
            multiplier = days / 1;
        }else if (currentTarget === 'Minutes:') {
            let hours = currentUnits / 60;
            let days = hours / 24;
            multiplier = days / 1;
        }else {
            let minutes = currentUnits / 60;
            let hours = minutes / 60;
            let days = hours / 24;
            multiplier = days / 1;
        }

        console.log(`MULTIPLIER : ${multiplier}`)

        for (let body of bodies) {
            let structure = body.children;
            console.log(structure);
            let name = structure[0].textContent.trim();
            console.log(name);
            let currentThingToWrite = table[name];
            console.log(table[name])
            console.log(currentThingToWrite);

            structure[1].value = Number(currentThingToWrite) * multiplier;

        }

    }

}

