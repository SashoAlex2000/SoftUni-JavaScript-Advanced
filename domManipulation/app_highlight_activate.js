function focused() {
    console.log('TODO:...');

    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }

}

