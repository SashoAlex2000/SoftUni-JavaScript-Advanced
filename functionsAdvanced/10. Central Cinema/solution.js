function solve() {
    // TODO

    //getting the inital form from the DOM
    let form = document.getElementsByTagName('form')[0];

    // getting the button and attaching the event listener
    let button = form.getElementsByTagName('div')[0].getElementsByTagName('button')[0];
    button.addEventListener('click', addMovieOnScreen);

    function addMovieOnScreen(event) {
        // preventing the refreshing of page because of default form behaviour
        event.preventDefault();
        console.log('test')

        // getting the inputs from the DOM
        let inputs = form.getElementsByTagName('div')[0].getElementsByTagName('input');
        let name = inputs[0].value;
        let hall = inputs[1].value;
        let ticketPrice = inputs[2].value;
        console.log(`${name} ${hall} ${ticketPrice}`)

        // validating inputs
        let isValid = true;
        if (name === '' && hall === '' && ticketPrice === ''){
            isValid = false;
        }
        if (isNaN(ticketPrice)) {
            isValid = false;
        }

        // proceeding only if the inputs are valid
        if (isValid) {
            console.log('VALID');


            // generating the needed HTML
            let movieHTML = `
            <span>${name}</span>
            <strong>Hall: ${hall}</strong>
            <div>
            <strong>${Number(ticketPrice).toFixed(2)}</strong>
            <input placeholder='Tickets Sold'>
            <button>Archive</button>
            </div>
            `

            // getting the ul - the list of movies
            let listOfMovies = document.getElementById('movies').getElementsByTagName('ul')[0];

            //generating the list item, putting the HTML on it, and appending it to the list
            let listItem = document.createElement('li');
            listItem.innerHTML = movieHTML;
            listOfMovies.appendChild(listItem);

            //emptying the input fields
            for (let input of inputs) {
                input.value = '';
            }

        }
        
    }


    let listOfMovies = document.getElementById('movies').getElementsByTagName('ul')[0];
    listOfMovies.addEventListener('click', archiveMovie);

    function archiveMovie(event) {

        // only performing actions if the button is clicked
        if (event.target.tagName === 'BUTTON') {

            // initializing important variables from DOM
            let listElement = event.target.parentElement.parentElement;
            let div = event.target.parentElement;
            // getting the 'Tickets sold' value
            let ticketsSold = Number(div.children[1].value)
            console.log(ticketsSold);

            //checking if the tickets sold is valid
            if (ticketsSold === '') {
                return
            }
            if (isNaN(ticketsSold) || ticketsSold === 0) {
                return
            }

            // if the number of ticket sold is satisfying we proceed onward.

            //getting the right variables which we use later;
            let movieName = listElement.children[0].textContent;            
            let price = div.children[0].textContent;
            let totalPRice = price * ticketsSold;

            console.log(`${movieName} ${price} ${totalPRice}`)

            // generating the needed html 
            let archiveHTML = `<span>${movieName}</span>
            <strong>Total amount: ${Number(totalPRice).toFixed(2)}</strong>
            <button>Delete</button>
            `;

            // getting the needed META elements from the DOM
            let archiveSection = document.getElementById('archive');
            let listOfArchivedMovies = archiveSection.children[1]

            // creating and appending the new list item to the archive
            let listItem = document.createElement('li');
            listItem.innerHTML = archiveHTML;
            listOfArchivedMovies.appendChild(listItem);

            // removing the movie from current movies
            listElement.remove();

        }
    }
    
    let listOfArchivedMovies = document.getElementById('archive').getElementsByTagName('ul')[0];
    listOfArchivedMovies.addEventListener('click', clearArchive);

    function clearArchive(event) {

        // proceeding only if the event is triggered on a button
        if (event.target.tagName === "BUTTON") {

            // deleting the event-target element if the button is the 'Delete' button, which deletes only current item
            if (event.target.parentElement.tagName === 'LI') {
                event.target.parentElement.remove()
            }else {
                // hmmm
            }
        }
    }

    // attaching the event listener to the 'clear' button
    let clearAllButton = document.getElementById('archive').children[2];
    clearAllButton.addEventListener('click', clearAll);

    // deleting all the movies from the archive
    function clearAll(event) {
        listOfArchivedMovies.innerHTML = '';
    }

}

