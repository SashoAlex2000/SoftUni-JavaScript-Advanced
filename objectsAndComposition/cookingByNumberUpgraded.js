

function cookingByNumberUpgraded(...arr){

    let number = arr.shift();
    number = Number(number)

    const cook = {
        chop () {number /= 2; },
        dice () {number = Math.sqrt(number); },
        spice () {number ++ ;},
        bake () {number *= 3; },
        fillet () {number *= 0.8}
    }

    for (let command of arr) {
        cook[command]();
        console.log(number)
    }
}


cookingByNumberUpgraded('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumberUpgraded('9', 'dice', 'spice', 'chop', 'bake',

'fillet')