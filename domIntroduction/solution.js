

function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    function capitalizeFirst(someWord) {
        let someArr = Array.from(someWord);

        someArr[0].toUpperCase;
        console.log(someArr);

        return someArr.join('');

    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    let result = '';
    // console.log(text);
    // console.log(convention);

    if (convention == "Camel Case") {
        text = text.toLowerCase();
        let currentArr = text.split(" ");
        console.log(currentArr);
        for (let i = 0; i < currentArr.length; i++) {
            let currentWord = currentArr[i];
            let newWord = currentWord.toLowerCase();

            if (i !== 0) {
                newWord = capitalizeFirstLetter(newWord);
            }

            currentArr[i] = newWord;

        }

        result = currentArr.join('');

    }else if (convention == "Pascal Case") {
        let currentArr = text.split(" ");
        console.log(currentArr);
        for (let i = 0; i < currentArr.length; i++) {
            let currentWord = currentArr[i];
            let newWord = currentWord.toLowerCase();

            newWord = capitalizeFirstLetter(newWord);
            
            currentArr[i] = newWord;

        }

        result = currentArr.join('');

    }else {
        result = "Error!"
    }

    document.getElementById('result').innerText = result;
}

