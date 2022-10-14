function solve() {
    console.log("//TODO")
    let initialButton = document.getElementById('add');

    initialButton.addEventListener('click', firstAdd);

    function checkForValidInput(someValue) {
        if (someValue === '') {
            return false;
        }
        return true;
    }

    function firstAdd(event) {
        event.preventDefault()

        console.log('TEST');
        let taskName = document.getElementById('task').value;
        let description = document.getElementById('description').value;
        let dueDate = document.getElementById('date').value;

        console.log(taskName);
        console.log(description)

        if (checkForValidInput(taskName) && checkForValidInput(description) && checkForValidInput(dueDate)) {


            let openSection = Array.from(Array.from(document.getElementsByTagName('section'))[1].children)[1];
            console.log(openSection)
            let newSection = `
        <h3>${taskName}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${dueDate}</p>
        
        <div class='flex'>
        <button class='green'>Start</button>
        <button class='red'>Delete</button>
        </div>
    
        `
            let newArticle = document.createElement('article')
            newArticle.innerHTML = newSection
            openSection.appendChild(newArticle);
        } else {
            //pass
        }

    }

    let openSection = Array.from(document.getElementsByTagName('section'))[1];
    let inProgress = document.getElementById('in-progress');
    console.log(openSection)
    openSection.addEventListener('click', progress);

    function progress(event) {

        if (event.target.nodeName !== 'BUTTON') {
            //pass
        } else {
            console.log('buitton')
            if (event.target.classList.contains('green')) {
                console.log('green button');
                // inProgress.innerHTML = '<h1>TEST</h1>'
                let currentSEction = event.target.parentNode.parentNode;
                console.log(currentSEction);
                let taskName = Array.from(currentSEction.getElementsByTagName('h3'))[0].textContent;
                console.log(taskName)

                let paragraphs = Array.from(currentSEction.getElementsByTagName('p'));
                let description = paragraphs[0].textContent;
                let dueDate = paragraphs[1].textContent;

                let newSection = `
                <h3>${taskName}</h3>
                <p>${description}</p>
                <p>${dueDate}</p>
        
                <div class='flex'>
                <button class='red'>Delete</button>
                <button class='orange'>Finish</button>
                </div>
                `;

                let newArticle = document.createElement('article');
                newArticle.innerHTML = newSection;
                inProgress.appendChild(newArticle);

                currentSEction.remove()



            } else {
                console.log('red button')
                let article = event.target.parentNode.parentNode;
                console.log(article);
                article.remove();
            }

        }

    }

    let inProgressSection = Array.from(document.getElementsByTagName('section'))[2];

    inProgressSection.addEventListener('click', finalFunc);

    function finalFunc(event) {
        if (event.target.nodeName !== 'BUTTON') {
            return
        }
        console.log('finale');
        if (event.target.classList.contains('red')) {
            let article = event.target.parentNode.parentNode;
            article.remove();
        }else {
            let currentSection = event.target.parentNode.parentNode;

            let paragraphs = Array.from(currentSection.getElementsByTagName('p'));
            let description = paragraphs[0].textContent;
            let dueDate = paragraphs[1].textContent;
            let taskName = Array.from(currentSection.getElementsByTagName('h3'))[0].textContent;


            let newSection = `
                <h3>${taskName}</h3>
                <p>${description}</p>
                <p>${dueDate}</p>
                `
            
            let newArticle = document.createElement('article');
            newArticle.innerHTML = newSection;
            let finalSection = Array.from(document.getElementsByTagName('section'))[3]
            finalSection.appendChild(newArticle);
            currentSection.remove()
        }   

    }

}

