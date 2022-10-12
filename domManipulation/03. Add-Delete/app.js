


function addItem() {
    //TODO...
    console.log("TESTED")

    let userInput = document.getElementsByTagName('input')[0].value;
    console.log(userInput);

    let header = document.getElementsByTagName('ul')[0];
    console.log(header)

    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.setAttribute('href', '#')

    deleteElement.addEventListener('click', deleteItem);

    function deleteItem(event) {
        console.log(event.target)
        event.target.parentNode.remove();

    }


    let newItem = document.createElement('li');
    newItem.textContent = userInput;
    newItem.appendChild(deleteElement);
    header.appendChild(newItem);

}


