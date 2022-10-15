function encodeAndDecodeMessages() {
    console.log('TODO...')
    let sendButton = document.getElementsByTagName('button')[0];

    sendButton.addEventListener('click', sendFunc);
    let secretMessage;
    let secondTextArea = document.getElementsByTagName('textarea')[1];

    function sendFunc(event) {
        console.log(event.target.parentElement.children[1].value)
        secretMessage = event.target.parentElement.children[1].value
        event.target.parentElement.children[1].value = "";
        secondTextArea.value = encodeMessage(secretMessage);
    }

    let decodeButton = document.getElementsByTagName('button')[1];

    decodeButton.addEventListener('click', decodeFunc);

    function decodeFunc(event) {
        console.log('decodin!');

        oldMessage = secondTextArea.value;
        secondTextArea.value = decodeMessage(oldMessage);

    }


    function encodeMessage(someMessage) {
        let list = someMessage.split('');
        let result = [];

        for (let letter of list) {
            let asciiValue = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(asciiValue + 1);
            result.push(newLetter);
        }

        return result.join("");
    }

    function decodeMessage(someMessage) {
        let list = someMessage.split('');
        let result = [];

        for (let letter of list) {
            let asciiValue = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(asciiValue - 1);
            result.push(newLetter);
        }

        return result.join("");
    }

}

