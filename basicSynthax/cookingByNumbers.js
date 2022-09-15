

function cookingByNumbers(number, first, second, third, fourth, fifth){

    number = Number(number);

    function cook(num, operation){
        switch (operation){
            case "chop": return num / 2;
            case "dice": return Math.sqrt(num);
            case "spice": return num + 1;
            case "bake": return num * 3;
            case "fillet": return num * 0.8;

        }
    }

    number = cook(number, first);
    console.log(number);
    number = cook(number, second);
    console.log(number);
    number = cook(number, third);
    console.log(number);
    number = cook(number, fourth);
    console.log(number);
    number = cook(number, fifth);

    
    console.log(number);
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')