window.addEventListener('load', solution);

function solution() {

    let sumbmitButton = document.getElementById('submitBTN');
    sumbmitButton.addEventListener('click', sumbitInfo);


    let nameBox = document.getElementById('fname');
    let emailBox = document.getElementById('email');
    let phoneBox = document.getElementById('phone');
    let addressBox = document.getElementById('address');
    let codeBox = document.getElementById('code');

    let infoBox = document.getElementById('infoPreview');
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');



    function sumbitInfo(event) {
        let name = nameBox.value;
        let email = emailBox.value;
        let phone = phoneBox.value;
        let code = codeBox.value;
        let address = addressBox.value;

        if (name === '' || email === '') {
            return;
        }

        let infoHTML = `
        <li>Full Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone Number: ${phone}</li>
        <li>Address: ${address}</li>
        <li>Postal Code: ${code}</li>
        `
        infoBox.innerHTML = infoHTML;

        nameBox.value = ''
        emailBox.value = ''
        phoneBox.value = ''
        codeBox.value = ''
        addressBox.value = ''

        sumbmitButton.disabled = true;
        editButton.disabled = false;
        continueButton.disabled = false;
        
    }

    editButton.addEventListener('click', editFlightInfo);

    function editFlightInfo(event) {

        let listItems = infoBox.children;

        let name = listItems[0].textContent.split(': ')[1];
        let email = listItems[1].textContent.split(': ')[1];
        let phone = listItems[2].textContent.split(': ')[1];
        let address = listItems[3].textContent.split(': ')[1];
        let code = listItems[4].textContent.split(': ')[1];

        nameBox.value = name
        emailBox.value = email
        phoneBox.value = phone
        codeBox.value = code
        addressBox.value = address

        infoBox.innerHTML = '';

        sumbmitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;

    }

    continueButton.addEventListener('click', finish);

    function finish(event) {
        let mainDiv = document.getElementById('block');

        mainDiv.innerHTML = `
        <h3>Thank you for your reservation!</h3>
        `
    }


}
