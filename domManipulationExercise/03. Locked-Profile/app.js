function lockedProfile() {
    let divs = Array.from(document.getElementsByClassName('profile'));

    console.log(divs);

    for (let div of divs) {
        div.addEventListener('click', showMore);
    }

    function showMore(event) {

        if (event.target.nodeName !== "BUTTON"){
            return;
        }

        console.log(event.target.textContent);
        let buttnName = event.target.textContent
        console.log("GET CLICKED");


        if (buttnName === 'Show more') {

            let metaDiv = event.target.parentElement; 
            console.log(metaDiv);
            let hiddenDiv = metaDiv.getElementsByTagName('div');
            console.log(hiddenDiv)

            let radio = metaDiv.getElementsByTagName('input')[0];
            console.log(`RADIOL ${radio.checked}`);
            let locked = radio.checked;

            if (locked === true) {
                return;
            }
    
            hiddenDiv[0].style.display = 'block';

            event.target.textContent = 'Hide it';
            
        }else if (buttnName === 'Hide it'){

            

            let metaDiv = event.target.parentElement; 
            let hiddenDiv = metaDiv.getElementsByTagName('div');

            let radio = metaDiv.getElementsByTagName('input')[0];
            let locked = radio.checked;

            if (locked === true) {
                return;
            }
    
            hiddenDiv[0].style.display = 'none';

            event.target.textContent = 'Show more';
        }



    }


}

