window.addEventListener("load", solve)

function solve() {

    //helper function which we'll use to validate the inputs
    function validateInput(arr) {
        let isValid = true;

        for (let element of arr) {
            if (element === '') {
                isValid = false;
            }
            if (!isNaN(element)) {
                if (element === 0) {
                    isValid = false;
                }
            }
        }

        return isValid
    }

    // attaching event listener to the Publish button 
    let publishButton = document.getElementById('publish');
    publishButton.addEventListener('click', publishOffer);

    // function which is executed when the publish button is clicked. The offer publish logic is here.
    function publishOffer(event) {
        // preventing the refreshing of the page due to form behaviour
        event.preventDefault();

        //getting the needed info
        let make = document.getElementById('make').value;
        let model = document.getElementById('model').value;
        let year = Number(document.getElementById('year').value);
        console.log(`${make} ${model} ${year}`)
        let fuelChoices = document.getElementById('fuel');
        let fuel = fuelChoices.options[fuelChoices.selectedIndex].value;
        console.log(fuel);
        let originalPrice = Number(document.getElementById('original-cost').value);
        let sellingPrice = Number(document.getElementById('selling-price').value);
        console.log(`${originalPrice} ${sellingPrice} `)


        // validating the inputs
        let arrOfInputs = [make, model, year, fuel, originalPrice, sellingPrice];
        if (validateInput(arrOfInputs) === true) {
            if (sellingPrice >= originalPrice) {
                console.log('PROCEEDING')
                // proceeding only if the inputs are valid;

                // getting and creating the needed elements
                let listingHTML = `
                <td>${make}</td>
                <td>${model}</td>
                <td>${year}</td>
                <td>${fuel}</td>
                <td>${originalPrice}</td>
                <td>${sellingPrice}</td>
                <td>
                <button class='action-btn edit'>Edit</button>
                <button class='action-btn sell'>Sell</button>
                </td>
                `;
                let newRow = document.createElement('tr');
                newRow.innerHTML = listingHTML;
                let tableBody = document.getElementById('table-body');
                tableBody.appendChild(newRow);

                //clearing the input fields
                document.getElementById('make').value = '';
                document.getElementById('model').value = '';
                document.getElementById('original-cost').value = '';
                document.getElementById('selling-price').value = '';
                document.getElementById('fuel').value = '';
                document.getElementById('year').value = '';

            }
        }


    }

    // attaching event listner to the table body of offers
    let listingBody = document.getElementById('table-body');
    listingBody.addEventListener('click', listingClick);

    // logic for when events are triggered
    function listingClick(event) {

        // stopping implmenetation of logic if the event target is not of type Button 
        if (event.target.tagName !== 'BUTTON') {
            return
        }

        // getting the info which the program needs in the case of both buttons
        let currentSpecs = event.target.parentElement.parentElement.getElementsByTagName('td');
        console.log(currentSpecs);
        let currentMake = currentSpecs[0].textContent;
        let currentModel = currentSpecs[1].textContent;
        let currentYear = currentSpecs[2].textContent;
        let currentFuel = currentSpecs[3].textContent;
        let currentPrice = Number(currentSpecs[4].textContent);
        let currentNewPrice = Number(currentSpecs[5].textContent);

        console.log(`${currentMake} ${currentModel} ${currentYear}`)
        console.log(`${currentFuel} ${currentPrice} ${currentNewPrice}`)


        // implementing the logic for the Edit button 
        if (event.target.textContent === 'Edit') {
            document.getElementById('make').value = currentMake;
            document.getElementById('model').value = currentModel;
            document.getElementById('original-cost').value = currentPrice;
            document.getElementById('selling-price').value = currentNewPrice;
            document.getElementById('fuel').value = currentFuel;
            document.getElementById('year').value = currentYear;
            event.target.parentElement.parentElement.remove();
        } else { // implementing the logic if the sell button is clicked


            // generating the new needed elements
            let currentProfit = currentNewPrice - currentPrice
            let soldCarsHTML = `
            <span>${currentMake} ${currentModel}</span>
            <span>${currentYear}</span>
            <span>${currentProfit}</span>
            `;
            let newListLine = document.createElement('li');
            let soldCarsList = document.getElementById('cars-list');
            newListLine.classList.add('each-list');

            // addint the new items to the Sold Cars section
            newListLine.innerHTML = soldCarsHTML;
            soldCarsList.appendChild(newListLine);

            // removing the listing
            event.target.parentElement.parentElement.remove();

            //updating the total profit made
            let oldProfit = Number(document.getElementById('profit').textContent);
            let newProfit = oldProfit + currentProfit;

            document.getElementById('profit').textContent = newProfit.toFixed(2);

        }

    }

}

