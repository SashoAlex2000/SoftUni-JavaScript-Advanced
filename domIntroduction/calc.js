

function calc() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;

    let result = Number(a) + Number(b);
    console.log(result);

    document.getElementById('sum').value = result;
}

