window.addEventListener('load', solve);

function solve() {

    let addsongButton = document.getElementById('add-btn');
    addsongButton.addEventListener('click', addSongFunc);

    let collectionOfSongs = document.getElementsByClassName('all-hits-container')[0];

    function addSongFunc(event) {

        event.preventDefault();

        let genreBox = document.getElementById('genre');
        let nameBox = document.getElementById('name');
        let authorBox = document.getElementById('author');
        let dateBox = document.getElementById('date');

        let genre = genreBox.value;
        let name = nameBox.value;
        let author = authorBox.value;
        let date = dateBox.value;

        if (genre === '' || name === '' || author === '' || date === '') {
            return;
        }

        let newDiv = document.createElement('div');
        newDiv.classList.add('hits-info');

        let songHTML = `
        <img src="./static/img/img.png">
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>
        `
        newDiv.innerHTML = songHTML;

        collectionOfSongs.appendChild(newDiv);

        genreBox.value = '';
        nameBox.value = '';
        authorBox.value = '';
        dateBox.value = '';
        

    }

    let savedContainer = document.getElementsByClassName('saved-container')[0];

    collectionOfSongs.addEventListener('click', collectionFunc);

    function collectionFunc(event) {

        if (event.target.tagName !== "BUTTON") {
            return;
        }

        if (event.target.textContent === 'Like song') {
            let initial = document.getElementsByClassName('likes')[0].getElementsByTagName('p')[0];
            let text = initial.textContent;
            let shredded = text.split(': ');
            let oldNumberOfLikes = Number(shredded[1]);
            initial.textContent = `Total Likes: ${oldNumberOfLikes + 1}`

            event.target.disabled = true;

        }else if (event.target.textContent === 'Save song') {

            let headerTwos = event.target.parentElement.getElementsByTagName('h2');
            let genre = headerTwos[0].textContent;
            let name = headerTwos[1].textContent;
            let author = headerTwos[2].textContent;
            let date = event.target.parentElement.getElementsByTagName('h3')[0].textContent;


            let newDiv = document.createElement('div');
            newDiv.classList.add('hits-info');

            let saveSongHTMl = `
            <img src="./static/img/img.png">
            <h2>${genre}</h2>
            <h2>${name}</h2>
            <h2>${author}</h2>
            <h3>${date}</h3>
            <button class="delete-btn">Delete</button>
            `;

            newDiv.innerHTML = saveSongHTMl;

            savedContainer.appendChild(newDiv);

            event.target.parentElement.remove();

        }else {
            event.target.parentElement.remove();
        }

    }

    savedContainer.addEventListener('click', finalDelete);

    function finalDelete(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        event.target.parentElement.remove();

    }

}

