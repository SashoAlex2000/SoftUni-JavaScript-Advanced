window.addEventListener('load', solve);

function solve() {

    let addButton = document.getElementById('add');

    addButton.addEventListener('click', addModel);

    let tableBody = document.getElementById('furniture-list')

    function addModel(event) {

        event.preventDefault();

        let modelBox = document.getElementById('model');
        let yearBox = document.getElementById('year');
        let descriptionBox = document.getElementById('description');
        let priceBox = document.getElementById('price');

        let model = modelBox.value;
        let year = Number(yearBox.value);
        let description = descriptionBox.value
        let price = Number(priceBox.value);

        console.log(`${model} ${year} ${description} ${price}`)

        if (model === '' || year === '' || description === '' || price === '') {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let newTableRow = document.createElement('tr');
        newTableRow.classList.add('info')

        let infoHTMl = `
        <td>${model}</td>
        <td>${price.toFixed(2)}</td>
        <td>
        <button class="moreBtn">More Info</button>
        <button class="buyBtn">Buy it</button>
        </td>
        `;

        newTableRow.innerHTML = infoHTMl;

        let hiddenRow = document.createElement('tr');

        hiddenRow.classList.add('hide');

        let hiddenHTML = `<td>Year: ${year}</td><td colspan="3">Description: ${description}</td>`;

        hiddenRow.innerHTML = hiddenHTML;

        tableBody.appendChild(newTableRow);
        tableBody.appendChild(hiddenRow);

        modelBox.value = ''
        yearBox.value = ''
        descriptionBox.value = ''
        priceBox.value = ''

    }

    tableBody.addEventListener('click', bodyLogic);

    function bodyLogic(event) {

        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        if (event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info'

            let keyWord = event.target.parentElement.parentElement.getElementsByTagName('td')[0].textContent;

            let allRows = Array.from(tableBody.children);
            let maigcIndex = -1;

            for (i = 0; i < allRows.length; i+= 2) {
                let currentRow = allRows[i];
                if (currentRow.getElementsByTagName('td')[0].textContent === keyWord) {
                    maigcIndex = i + 1;
                    break
                }
            }

            let rowToShow = allRows[maigcIndex];
            rowToShow.style.display = 'contents'

        }else if (event.target.textContent === 'Less Info') {

            event.target.textContent = 'More Info';

            let keyWord = event.target.parentElement.parentElement.getElementsByTagName('td')[0].textContent;

            let allRows = Array.from(tableBody.children);
            let maigcIndex = -1;

            for (i = 0; i < allRows.length; i+= 2) {
                let currentRow = allRows[i];
                if (currentRow.getElementsByTagName('td')[0].textContent === keyWord) {
                    maigcIndex = i + 1;
                    break
                }
            }

            let rowToShow = allRows[maigcIndex];
            rowToShow.style.display = 'none'

        } else {

            let totalPrice = document.getElementsByClassName('total-price')[0];
            let oldPrice = Number(totalPrice.textContent);

            let newPrice = Number(event.target.parentElement.parentElement.getElementsByTagName('td')[1].textContent);

            oldPrice += newPrice
            totalPrice.textContent = oldPrice.toFixed(2);

            let keyWord = event.target.parentElement.parentElement.getElementsByTagName('td')[0].textContent;
            let maigcIndex = -1;
            let allRows = Array.from(tableBody.children);

            for (let i = 0 ; i < allRows.length; i+=2) {
                let currentRow = allRows[i];
                if (currentRow.getElementsByTagName('td')[0].textContent === keyWord) {
                    maigcIndex = i;
                    break
                }
            }

            let first = allRows[i];
            let second = allRows[i+1];

            first.remove()
            second.remove();


        }

    }


}
