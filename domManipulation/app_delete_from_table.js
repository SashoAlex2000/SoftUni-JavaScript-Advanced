function deleteByEmail() {
    console.log('TODO:...');

    let itemToBeDeleted = document.getElementsByTagName('input')[0].value;

    console.log(itemToBeDeleted)

    let body = Array.from(document.getElementsByTagName('tbody')[0].children);
    console.log(body);
    let isFound = false;


    for (let row of body) {
        console.log(row.children[1].textContent);
        if (row.children[1].textContent === itemToBeDeleted) {
            row.remove()   
            isFound = true;
        }
    }

    if (isFound === true) {
        document.getElementById('result').textContent = 'Deleted';
    }else {
        document.getElementById('result').textContent = 'Not found.';
    }

}

