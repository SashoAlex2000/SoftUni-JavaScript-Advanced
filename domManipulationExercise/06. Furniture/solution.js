

function solve() {
    let generateButton = document.getElementsByTagName('button')[0];

    generateButton.addEventListener('click', generateFunc);

    function generateFunc(event) {
        console.log("GENERATING!!");

        let firstTextArea = document.getElementsByTagName('textarea')[0];
        let furnitureList = firstTextArea.value;
        console.log(furnitureList);
        let body = document.getElementsByTagName('tbody')[0];
        console.log(body);

        let arr = JSON.parse(furnitureList)
        for (let element of arr) {
            console.log(element);
            let newRow = document.createElement('tr');
            let firstTD = document.createElement('td');
            // firstTD.textContent = "TEST";
            let image = document.createElement('img');
            image.setAttribute('src', element.img);
            firstTD.appendChild(image);

            let secondTD = document.createElement('td');
            secondTD.textContent = element.name;
            console.log(element.name)

            let thirdTD = document.createElement('td');
            thirdTD.textContent = element.price;

            let fourthTD = document.createElement('td');
            fourthTD.textContent = element.decFactor;

            let fifthTD = document.createElement('input');
            fifthTD.setAttribute('type', 'checkbox');

            newRow.appendChild(firstTD);
            newRow.appendChild(secondTD);
            newRow.appendChild(thirdTD);
            newRow.appendChild(fourthTD);
            newRow.appendChild(fifthTD);
            body.appendChild(newRow);

        }
        
    }

    let buyButton = document.getElementsByTagName('button')[1];

    buyButton.addEventListener('click', buy);

    function buy(event) {
        console.log("ITS BUYING TME!")
        let body = document.getElementsByTagName('tbody')[0];
        let result = [];
        let totalPrice = 0;
        let totalDecorationFactor = 0;

        for (let row of body.children) {
            console.log(row);
            let checkbox = row.getElementsByTagName('input')[0].checked;
            if (checkbox === true) {
                let elements = row.children;
                console.log(elements);
                result.push(elements[1].textContent);
                totalPrice += Number(elements[2].textContent);
                totalDecorationFactor += Number(elements[3].textContent);
            }            
        }

        let secondTextArea = document.getElementsByTagName('textarea')[1];

        secondTextArea.value = `Bought furniture: ${result.join(", ")}\n`;
        secondTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        secondTextArea.value += `Average decoration factor: ${totalDecorationFactor / result.length}`;


    }


}

