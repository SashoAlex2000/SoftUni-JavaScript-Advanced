function attachGradientEvents() {
    console.log('TODO:...');

    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', solution);

    function solution(event) {
        // let position = event.offsetX;
        let position = event.offsetX / (event.target.clientWidth - 1);
        console.log(position)

        let totalWidth = event.target.offsetWidth;

        let result = `${Math.floor(position * 100)}%`;

        document.getElementById('result').textContent = result;
    }

}

