function validate() {
    console.log('TODO:...');

    let email = document.getElementsByTagName('input')[0].value;

    let check = document.getElementsByTagName('input')[0];

    // console.log(email)

    check.addEventListener('change', magic);

    function magic(event) {
        console.log(event.target.value)
        event.target.classList.remove('error')
        console.log("FIRED")
        // console.log(event.target.parentElement)
        let testCond = false;
        let emailValue = event.target.value;

        if (emailValue.includes('@') === false){
            testCond = true;
        }else{
            if (emailValue.includes('.') === false){
                testCond = true;
            }
        }
        

        if (testCond === true) {
            event.target.classList.add('error')
        }
    }

}


let button = document.getElementById('putka');

button.addEventListener('click', buttonFunc);

function buttonFunc(event) {
    console.log(document.getElementsByTagName('input')[0].value)
}

