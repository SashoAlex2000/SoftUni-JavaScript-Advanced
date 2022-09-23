
        function firstFunc(){
            let header = document.getElementsByTagName('h1');
            let input = document.getElementById("first_data");
            let value = input.value;
        
            for (i = 0; i < header.length; i++) {
                let element = header[i];
                console.log(element.innerText);
                if (element.id == "Special"){
                    element.style.color = "red";
                    element.innerText += `\n ${value} ${i}`;
                }
            }
        }
      

function sum() {
    let firstNum = Number(document.getElementById('first').value);
    let secondNum = Number(document.getElementById('second').value);

    let result = firstNum + secondNum;

    document.getElementById("result").textContent = `Result: ${result}`;

}

// function edit(ref, match, replacer) {

//     let text = ref.textContent;

//     text = text.replaceAll(match, replacer);

//     ref.textContent = text

// }

function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
}
  
function activator() {
    let element = document.getElementById("for-change");
    edit(element, "Test", "Changed");   
}

function change_important() {
    let elements = document.getElementsByClassName("important");
    for (let element of elements) {
        element.style.color = "purple";
        element.style.fontSize = '25px'
    }
}

function extractText() {

    let listItems = document.querySelectorAll('ul li')
    
    let textArea = document.getElementById('result');

    for (let item of listItems) {
        textArea.value += item.innerText + "\n";
    }
}

function sortNums() {
    // let listItems = document.getElementById('number');
    // let input = document.getElementById("first");
    // let value = input.value;
    // console.log(value)
    // for (element in value) {
    //     console.log(element)
    // 

    // let listItems = document.querySelectorAll('input')
    let listItems = document.getElementsByTagName('ul li');

    console.log(listItems)

    for (let item of listItems) {
        let value = item.value;
        console.log(value);
    }

}