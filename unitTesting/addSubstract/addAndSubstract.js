

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


module.exports = {
    createCalculator
}

// let testCalculator = createCalculator();
// console.log(testCalculator)

// console.log(testCalculator.get())
// console.log(testCalculator.add(15))
// console.log(testCalculator.add(5))
// console.log(testCalculator.subtract(1))


// console.log(testCalculator.get())
// console.log(testCalculator.value)