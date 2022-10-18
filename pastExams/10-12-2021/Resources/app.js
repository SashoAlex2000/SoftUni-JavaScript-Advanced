window.addEventListener('load', solve);

function solve() {

    // extracting needed elements from the DOM which we will need later ; 
    let submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click', submitForm);

    let ordersSecion = document.getElementById('received-orders');

    // function holding the logic for the submit function
    function submitForm(event) {
        event.preventDefault();
        console.log('test')

        // exracting the needed values from the inputs
        let productType = document.getElementById('type-product').value;
        let description = document.getElementById('description').value;
        let clientName = document.getElementById('client-name').value;
        let phone = document.getElementById('client-phone').value;

        // stopping the function if any of the values are empty
        if (description == '' || clientName == '' || phone == '') {
            return;
        }

        console.log(`${productType} ${description} ${clientName} ${phone}`)

        // generating the new elements and adding them to the received orders section
        let newContainer = document.createElement('div');
        newContainer.classList.add('container')

        let orderHTLM = `
        <h2>Product type for repair: ${productType}</h2>
        <h3>Client information: ${clientName}, ${phone}</h3>
        <h4>Description of the problem: ${description}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>
        `;
        newContainer.innerHTML = orderHTLM;

        ordersSecion.appendChild(newContainer);

        // clearing the input fields
        document.getElementById('description').value = ''
        document.getElementById('type-product').value = ''
        document.getElementById('client-name').value = ''
        document.getElementById('client-phone').value = ''

    }

    ordersSecion.addEventListener('click', receivedOrdersFunc);

    let completedOrders = document.getElementById('completed-orders');

    function receivedOrdersFunc(event) {

        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        console.log('receiver');

        if (event.target.textContent === 'Start repair') {
            
            let currentButtons = event.target.parentElement.getElementsByTagName('button');

            currentButtons[0].disabled = true;
            currentButtons[1].disabled = false;

        }else {
            
            let productType = event.target.parentElement.getElementsByTagName('h2')[0].textContent;
            let nameAndPhone = event.target.parentElement.getElementsByTagName('h3')[0].textContent;
            let description = event.target.parentElement.getElementsByTagName('h4')[0].textContent;


            let finishedOrderHTML = `
            <h2>${productType}</h2>
            <h3>${nameAndPhone}</h3>
            <h4>${description}</h4>
            `;

            let newDiv = document.createElement('div');
            newDiv.classList.add('container')


            newDiv.innerHTML = finishedOrderHTML;

            completedOrders.appendChild(newDiv);

            event.target.parentElement.remove();

        }


    }


    let clearButton = document.getElementsByClassName('clear-btn')[0];

    clearButton.addEventListener('click', clearFinishedOrders);

    function clearFinishedOrders(event) {

        console.log('clearing house')

        let divsForDeletion = Array.from(completedOrders.querySelectorAll('div'))

        divsForDeletion.forEach(box => {
            box.remove();
        })

    }      

}

