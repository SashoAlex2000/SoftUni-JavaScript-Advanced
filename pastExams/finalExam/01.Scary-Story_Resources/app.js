window.addEventListener("load", solve);

function solve() {

    let publishButton = document.getElementById('form-btn');
    publishButton.addEventListener('click', publishFunc);

    let firsNameBox = document.getElementById('first-name');
    let lastNameBox = document.getElementById('last-name');
    let ageBox = document.getElementById('age');
    let titleBox = document.getElementById('story-title');
    let genreBox = document.getElementById('genre');
    let storyBox = document.getElementById('story');

    let storyHolder = document.getElementById('preview-list');


    function publishFunc(event) {

        let firstName = firsNameBox.value;
        let lastName = lastNameBox.value;
        let age = ageBox.value;
        let title = titleBox.value;
        let genre = genreBox.value;
        let story = storyBox.value;

        console.log(`${firstName} ${lastName} ${age} ${title} ${genre} ${story} `);

        if (firstName == '' || lastName == '' || age == '' || title == '' || story == '') {
            return
        }

        console.log('cont');

        let newListItem = document.createElement('li');
        newListItem.classList.add('story-info');

        let storyHTMl = `
        <article>
        <h4>Name: ${firstName} ${lastName}</h4>
        <p>Age: ${age}</p>
        <p>Title: ${title}</p>
        <p>Genre: ${genre}</p>
        <p>${story}</p>
        </article>
        <button class="save-btn">Save Story</button>
        <button class="edit-btn">Edit Story</button>
        <button class="delete-btn">Delete Story</button>
        `;

        newListItem.innerHTML = storyHTMl;

        storyHolder.appendChild(newListItem)

        event.target.disabled = true;

        firsNameBox.value = '';
        lastNameBox.value = '';
        ageBox.value = '';
        titleBox.value = '';
        // genreBox.value = '';
        storyBox.value = '';


    }

    storyHolder.addEventListener('click', sotryFunc);

    function sotryFunc(event) {

        if (event.target.tagName !== 'BUTTON') {
            return
        }

        console.log('success')

        if (event.target.textContent === 'Edit Story') {
            console.log(event.target.parentElement);

            let articleOfStory = event.target.parentElement.getElementsByTagName('article')[0];

            let info = Array.from(articleOfStory.children);

            let firstName = info[0].textContent.split(': ')[1].split(' ')[0]; 
            let lastName = info[0].textContent.split(': ')[1].split(' ')[1];
            let age = info[1].textContent.split(': ')[1];
            let title = info[2].textContent.split(': ')[1];
            let genre = info[3].textContent.split(': ')[1];
            let story = info[4].textContent;

            console.log(`${firstName} ${lastName} ${age} ${title} ${genre} ${story} `);

            firsNameBox.value = firstName;
            lastNameBox.value = lastName;
            ageBox.value = age;
            titleBox.value = title;
            genreBox.value = genre;
            storyBox.value = story;

            publishButton.disabled = false;

            event.target.parentElement.remove();
        }else if (event.target.textContent === 'Save Story') {

            let mainDiv = document.getElementById('main');

            mainDiv.innerHTML = `
            <h1>Your scary story is saved!</h1>
            `

        }else {
            publishButton.disabled = false;
            event.target.parentElement.remove();
        }

    }

}

