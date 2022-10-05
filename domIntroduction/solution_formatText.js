function solve() {
    let text = document.getElementById('input').value;
    let sentences = text.split('.')
  
    console.log(sentences)
  
    // document.getElementById('output').innerHTML += `<p>${text}</p>`;
    
    for (let i = 0; i < sentences.length; i++) {
        let currentSentece = sentences[i];
        if (currentSentece == '') {
            sentences.splice(i,1);
        }
    }


    let counter = 0;
    let temp = [];
    for (let sentence of sentences) {
        counter += 1;
        temp.push(sentence);
        console.log(`${counter} - ${sentence}`)

        if (counter == 3) {
            console.log(temp)
            counter = 0;
            let currText = temp.join(".");
            currText += '.'
            document.getElementById('output').innerHTML += `<p>${currText}</p>`;
            temp = [];
        }
    
    }

    if (temp.length > 0) {
        let currText = temp.join(".");
        currText += '.'

        document.getElementById('output').innerHTML += `<p>${currText}</p>`;
    }
  
}

