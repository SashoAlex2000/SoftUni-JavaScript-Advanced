

function solve() {

    // attaching event listener to the send button 
    let sendButton = document.getElementById('add');
    sendButton.addEventListener('click', sendEmail);

    // initializinng the needed input boxes from the DOM
    let recepientBox = document.getElementById('recipientName')
    let titleBox = document.getElementById('title')
    let messageBox = document.getElementById('message')


    let emaiList = document.getElementById('list');


    // send button functionality
    function sendEmail(event) {
        event.preventDefault();

        //getting the values
        let recepient = recepientBox.value;
        let title = titleBox.value;
        let message = messageBox.value;

        if (recepient === '' || title == '' || message == '') {
            return;
        }

        // generating the needed elements and addint the new info to the DOM
        let emailHTMl = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recepient}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type='submit' id="send">Send</button>
            <button type='submit' id="delete">Delete</button>
        </div>
        `

        let newListItem = document.createElement('li');

        newListItem.innerHTML = emailHTMl;
        emaiList.appendChild(newListItem);

        // clearing the inputs 
        recepientBox.value = ''
        titleBox.value = ''
        messageBox.value = ''

    }

    // adding event listener to the reset button
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetInput);

    // reset button functionality
    function resetInput(event) {
        event.preventDefault();
        recepientBox.value = '';
        titleBox.value = '';
        messageBox.value = '';
    }

    emaiList.addEventListener('click', activeEmailFunc);

    function activeEmailFunc(event) {

        if (event.target.tagName !== "BUTTON") {
            return
        }

        let infoBits = event.target.parentElement.parentElement.getElementsByTagName('h4');
        let title = infoBits[0].textContent;
        let recepient = infoBits[1].textContent;


        if (event.target.textContent === "Send") {

            let sentMailHTML = `
            <span>To: ${recepient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>
            `;

            let newListItem = document.createElement('li');
            newListItem.innerHTML = sentMailHTML;

            let sentEmails = document.getElementsByClassName('sent-list')[0];
            sentEmails.appendChild(newListItem);


        } else {
            let deletedMailHTML = `
            <span>To: ${recepient}</span>
            <span>Title: ${title}</span>
            `;
            let deletedList = document.getElementsByClassName('delete-list')[0];
            let newLiItem = document.createElement('li');
            newLiItem.innerHTML = deletedMailHTML;
            deletedList.appendChild(newLiItem);
        }

        event.target.parentElement.parentElement.remove();
    }

    let sentList = document.getElementsByClassName('sent-mails')[0];
    sentList.addEventListener('click', deleteSentEmail);

    function deleteSentEmail(event) {
        if (event.target.tagName !== "BUTTON") {
            return
        }

        let infoBits = event.target.parentElement.parentElement.getElementsByTagName('span');
        let title = infoBits[0].textContent;
        let recepient = infoBits[1].textContent;

        let deletedMailHTML = `
            <span>To: ${recepient}</span>
            <span>Title: ${title}</span>
            `;
        let deletedList = document.getElementsByClassName('delete-list')[0];
        let newLiItem = document.createElement('li');
        newLiItem.innerHTML = deletedMailHTML;
        deletedList.appendChild(newLiItem);

        event.target.parentElement.parentElement.remove();

    }


}


solve()