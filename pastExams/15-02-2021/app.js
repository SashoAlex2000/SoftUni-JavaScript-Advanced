function solution() {

    let addGiftButton = document.getElementsByTagName('button')[0];
    addGiftButton.addEventListener('click', addGiftFunc);

    let listOfGifts = document.getElementsByTagName('ul')[0];

    function addGiftFunc(event) {

        let currentInput = document.getElementsByTagName('input')[0].value;

        let newListItem = document.createElement('li');
        newListItem.classList.add('gift')

        newListItem.textContent = `${currentInput}`

        console.log(newListItem)

        let sendGiftButton = document.createElement('button');
        sendGiftButton.setAttribute('id', 'sendButton');
        sendGiftButton.textContent = 'Send';

        let discardGiftButton = document.createElement('button');
        discardGiftButton.setAttribute('id', 'discardButton');
        discardGiftButton.textContent = 'Discard';

        newListItem.appendChild(sendGiftButton);
        newListItem.appendChild(discardGiftButton);
        listOfGifts.appendChild(newListItem)

        // console.log(newListItem.textContent)
        document.getElementsByTagName('input')[0].value = '';

        let gifts = Array.from(listOfGifts.children);
        let names = [];

        for (let gift of gifts) {

            let currentGiftname = gift.textContent.split('Send')[0];
            names.push(currentGiftname);

        }

        // for (let gift of listOfGifts.children) {
        //     console.log(gift.innerText)
        // }

        let sortedNames = names.sort();
        listOfGifts.textContent = ''

        for (let i = 0; i < sortedNames.length; i++) {

            let name = sortedNames[i];

            let newListItem = document.createElement('li');
            newListItem.classList.add('gift')
    
            newListItem.textContent = `${name}`
    
            console.log(newListItem)
    
            let sendGiftButton = document.createElement('button');
            sendGiftButton.setAttribute('id', 'sendButton');
            sendGiftButton.textContent = 'Send';
    
            let discardGiftButton = document.createElement('button');
            discardGiftButton.setAttribute('id', 'discardButton');
            discardGiftButton.textContent = 'Discard';
    
            newListItem.appendChild(sendGiftButton);
            newListItem.appendChild(discardGiftButton);
            listOfGifts.appendChild(newListItem)
    

        }
        

    }

    listOfGifts.addEventListener('click', listFunc);

    function listFunc(event) {

        if (event.target.tagName !== "BUTTON") {
            return;
        }

        if (event.target.textContent === 'Send') {
            console.log(event.target.parentElement.innerText);

            let giftName = event.target.parentElement.innerText.split('Send')[0];

            let sendGifts = document.getElementsByTagName('ul')[1];

            let newListItem = document.createElement('li');
            newListItem.classList.add('gift');

            newListItem.textContent = giftName
            
            sendGifts.appendChild(newListItem);
            event.target.parentElement.remove();
        }
        else if (event.target.textContent === 'Discard') {
            let giftName = event.target.parentElement.innerText.split('Send')[0];

            let sendGifts = document.getElementsByTagName('ul')[2];

            let newListItem = document.createElement('li');
            newListItem.classList.add('gift');

            newListItem.textContent = giftName
            
            sendGifts.appendChild(newListItem);
            event.target.parentElement.remove();
        }

    }

}
