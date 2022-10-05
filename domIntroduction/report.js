function generateReport() {
    //TODO
    let result = [];

    let head = document.getElementsByTagName('thead')[0].children[0].children;
    console.log(head);

    let magicIndexes = [];

    let counter = 0

    for (let box of head) {
        console.log(box.children[0].checked)
        console.log(box.innerText)
        if (box.children[0].checked === true) {
            magicIndexes.push(counter);
        }
        counter ++;
    }
    console.log(magicIndexes);

    let bodies = document.getElementsByTagName('tbody')[0].children;
    console.log(bodies);

    for (let body of bodies) {
        let currLength = body.children.length;
        let currentObj = {

        }

        // for (let i = 0; i < currLength; i++) {
        //     if (i == 0) {
        //         console.log(body.children[i].innerText);
        //     }
        // }

        for (let magicIndex of magicIndexes) {
            let currentDepartment = head[magicIndex].innerText.toLowerCase();
            currentObj[currentDepartment] = body.children[magicIndex].innerText
        }
        // console.log(currentObj)
        result.push(currentObj)

    }
    console.log(result);

    let textArea = document.getElementById('output');

    textArea.value += JSON.stringify(result);

}
