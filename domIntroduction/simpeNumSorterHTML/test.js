
function sortNums() {
    let numbers = [];

   numbers.push(Number(document.getElementById('first').value));
   numbers.push(Number(document.getElementById('second').value));
   numbers.push(Number(document.getElementById('third').value));
   numbers.push(Number(document.getElementById('fourth').value));
   numbers.push(Number(document.getElementById('fifth').value));
   numbers.push(Number(document.getElementById('sixth').value));

    console.log(numbers);

    numbers.sort((a,b) => a - b);

    let textArea = document.getElementById('result');

    for (let item of numbers) {
        textArea.value += item + "\n";
    }

}