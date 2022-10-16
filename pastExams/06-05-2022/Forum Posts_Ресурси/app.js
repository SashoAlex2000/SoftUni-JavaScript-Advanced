window.addEventListener("load", solve);

function solve() {

    // attaching event listener to the pubslihs button
    let publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', publishPost);

    // logic for publishing is here
    function publishPost(event) {
        
        // getting the needed user info from the DOM
        let title = document.getElementById('post-title').value;
        let category = document.getElementById('post-category').value;
        let content = document.getElementById('post-content').value;

        // proceeding if the info is valid
        if (title !== '' && category !== '' && content !== '') {

            // generating and getting the needed elements
            let postsToReviewList = document.getElementById('review-list');
            let listItem = document.createElement('li');
            listItem.classList.add('rpost')
            let postHTML = `
            <article>
            <h4>${title}</h4>

            <p>Category: ${category}</p>
            
            <p>Content: ${content}</p>
            </article>
            <button class='action-btn edit'>Edit</button>
            <button class='action-btn approve'>Approve</button>
            `;

            // attaching the elemets to the DOM
            listItem.innerHTML = postHTML;
            postsToReviewList.appendChild(listItem);

            // emptying the input containers
            document.getElementById('post-title').value = '';
            document.getElementById('post-category').value = '';
            document.getElementById('post-content').value = '';

        }
            
    }
    
    // getting the items forthe review list and adding event listener
    let reviewListItems = document.getElementById('review-list');
    console.log(reviewListItems)

    reviewListItems.addEventListener('click', reviewItem)

    // event actions done on the buttons in the review list items;
    function reviewItem(event) {
        if (event.target.tagName !== 'BUTTON') {
            return
        }
        console.log('review');

        // generating the current element info, needed for both actions
        let currentInfoElements = event.target.parentElement.getElementsByTagName('article')[0].children;
        let currentTitle = currentInfoElements[0].textContent;
        let currentCategory = currentInfoElements[1].textContent;
        let currentContent = currentInfoElements[2].textContent;

        let publishedList = document.getElementById('published-list');


        //logic if the clicked button is ['EDIT']
        if (event.target.textContent === 'Edit') {

            document.getElementById('post-title').value = currentTitle;
            document.getElementById('post-category').value = currentCategory;
            document.getElementById('post-content').value = currentContent;

            event.target.parentElement.remove();

        //         //logic if the clicked button is ['APPROVE']
        }else {
            let uploadedHTMl = `
            <article>
            <h4>${currentTitle}</h4>
            <p>${currentCategory}</p>
            <p>${currentContent}</p>
            </article>
            `;

            let newLiItem = document.createElement('li');
            newLiItem.classList.add('rpost');

            newLiItem.innerHTML = uploadedHTMl;
            publishedList.appendChild(newLiItem);

            event.target.parentElement.remove();
        }   

    }

    let clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clearUploaded);

    function clearUploaded(event) {
        let publishedList = document.getElementById('published-list');
        publishedList.innerHTML = '';

    }

}
