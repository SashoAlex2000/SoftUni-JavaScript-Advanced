function solution() {

    let addGiftButton = document.getElementsByTagName('button')[0];
    addGiftButton.addEventListener('click', addGiftFunc);

    let listOfGifts = document.getElementsByTagName('ul')[0];

    function addGiftFunc(event) {

        let currentInput = document.getElementsByTagName('input')[0].value;

        let newListItem = document.createElement('li');
        newListItem.classList.add('gift')


        let giftHTML = `
            ${currentInput}
            <button id="sendButton">Send</button>
            <button id="discardButton">Discard</button>
        `;

        newListItem.innerHTML = giftHTML;
        listOfGifts.appendChild(newListItem);

        document.getElementsByTagName('input')[0].value = '';

        let gifts = Array.from(listOfGifts.children);

        console.log(listOfGifts.children)
        let names = [];

        for (let gift of gifts) {

            names.push(gift.innerText.split(' ')[0]);

        }

        let sortedNames = names.sort();

        for (let i = 0; i < sortedNames.length; i++) {
            let currrentName = sortedNames[i];
            listOfGifts.children[i].innerHTML = `
            ${currrentName}
            <button id="sendButton">Send</button>
            <button id="discardButton">Discard</button>
            `;
        }


    }

    listOfGifts.addEventListener('click', listFunc);

    function listFunc(event) {

        if (event.target.tagName !== "BUTTON") {
            return;
        }

        if (event.target.textContent === 'Send') {
            console.log(event.target.parentElement.innerText);

            let giftName = event.target.parentElement.innerText.split(' ')[0];

            let sendGifts = document.getElementsByTagName('ul')[1];

            let newListItem = document.createElement('li');
            newListItem.classList.add('gift');

            newListItem.innerHTML = `
                ${giftName}
            `;
            
            sendGifts.appendChild(newListItem);
            event.target.parentElement.remove();
        }else if (event.target.textContent === 'Discard') {
            let giftName = event.target.parentElement.innerText.split(' ')[0];

            let sendGifts = document.getElementsByTagName('ul')[2];

            let newListItem = document.createElement('li');
            newListItem.classList.add('gift');

            newListItem.innerHTML = `
                ${giftName}
            `;
            
            sendGifts.appendChild(newListItem);
            event.target.parentElement.remove();
        }

    }

}
