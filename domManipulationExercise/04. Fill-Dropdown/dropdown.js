function addItem() {
    console.log('TODO:...');
    let article = Array.from(document.getElementsByTagName('article'))[0];

    // let inputs = document.getElementsByTagName('input');
    // console.log(inputs[0]);
    // console.log(inputs[1]);


    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;



    let p = document.createElement('option');
    p.textContent = newText;
    p.setAttribute('value', newValue);
    // console.log(p)

    // console.log(article.children[0].children[0])
    let cunci = Array.from(Array.from(article.children)[0].children)[0];
    cunci.add(p);
    let inputs = document.getElementsByTagName('input');
    inputs[0].value = "";
    inputs[1].value = "";

}

