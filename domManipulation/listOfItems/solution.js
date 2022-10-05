

function addItem() {

    let userItem = document.getElementById('newItemText').value;
    console.log(userItem);

    let p = document.createElement('li');
    p.textContent = userItem;
    let output = document.getElementById('items');
    console.log(output)
    output.appendChild(p);

}