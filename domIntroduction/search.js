

function search() {
    let searchedWord = document.getElementById('searchText').value;
    console.log(searchedWord);
    let counter = 0;

    let townList = Array.from(document.querySelectorAll('ul li'));
    console.log(townList);

    for (let element of townList) {
        element.style.textDecoration = '';
        element.style.fontWeight = '';
    }

    for (let element of townList) {
        
        let currentWord = element.innerText;
        if(currentWord.includes(searchedWord)) {
            counter += 1;
            console.log(currentWord);
            console.log(element)
            element.style.textDecoration = 'underline';
            element.style.fontWeight = 'bold';
        }
    }
    document.getElementById('result').innerText = `${counter} matches found`;
}

