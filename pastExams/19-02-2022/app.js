function solve() {

    // attaching event listener to the add-worker button;
    let addWorkerButton = document.getElementById('add-worker');
    addWorkerButton.addEventListener('click', addWorkerFunc);

    // getting references to the DOM input elements, which will be used;
    let firstNameBox = document.getElementById('fname');
    let lastNameBox = document.getElementById('lname');
    let emailBox = document.getElementById('email');
    let birthBox = document.getElementById('birth');
    let positionBox = document.getElementById('position');
    let salaryBox = document.getElementById('salary');

    let tableBody = document.getElementById('tbody');


    // adding the button functionality;
    function addWorkerFunc(event) {
        // preventing the refreshing of the page due to form behaviour
        event.preventDefault();

        // getting the inputs
        let firstName = firstNameBox.value;
        let lastName = lastNameBox.value;
        let email = emailBox.value;
        let birthday = birthBox.value;
        let position = positionBox.value;
        let salary = salaryBox.value;

        if (firstName === '' || lastName === '' || email === '' || birthday === '' || position === '' || salary == ''){
            return
        }

        //generating the new elements and putting them in the DOM
        let newWorkerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${birthday}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td>
        <button class="fired">Fired</button>
        <button class="edit">Edit</button>
        </td>
        `;

        let newListItem = document.createElement('tr');
        newListItem.innerHTML = newWorkerHTML;
        tableBody.appendChild(newListItem);

        // clearing the inputs
        firstNameBox.value = ''
        lastNameBox.value = ''
        emailBox.value = ''
        birthBox.value = ''
        positionBox.value = ''
        salaryBox.value = ''

        // updating the total budget for salaries 
        let oldSum = Number(document.getElementById('sum').textContent)
        oldSum += Number(salary);
        document.getElementById('sum').textContent = oldSum.toFixed(2);
    }


    tableBody.addEventListener('click', tableEventFunc);

    // functionality for the Edit and Fire buttons
    function tableEventFunc(event) {

        if (event.target.tagName !== 'BUTTON') {
            return
        }

        // geting the needed info from the table row;
        let infoBits = event.target.parentElement.parentElement.getElementsByTagName('td');
        let fname = infoBits[0].textContent;
        let lname = infoBits[1].textContent;
        let email = infoBits[2].textContent;
        let birthDate = infoBits[3].textContent;
        let position = infoBits[4].textContent;
        let salary = infoBits[5].textContent;

        // functionality for the Edit action
        if (event.target.textContent === 'Edit') {

            // putting the valies in the input form
            firstNameBox.value = fname
            lastNameBox.value = lname
            emailBox.value = email
            birthBox.value = birthDate
            positionBox.value = position
            salaryBox.value = salary;

        }
        //updating the total budget
        event.target.parentElement.parentElement.remove()
        let oldSum = Number(document.getElementById('sum').textContent)
        oldSum -= Number(salary);
        document.getElementById('sum').textContent = oldSum.toFixed(2);
    }


}
solve()