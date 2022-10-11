// lion


class Hex {
    constructor (value) {
        this.value = value;
    }

    valueOf() {
        return this.value
    }

    toString() {
        return ("0x" + this.value.toString(16).toUpperCase())
    }

    plus(number) {

    if (number instanceof Hex) {
        let totalValue = this.valueOf() + number.valueOf();

        return new Hex(totalValue);
    }else{
        let newHex = new Hex(number + this.value);
        return newHex
    }
    }

    minus(number) {

        if (number instanceof Hex) {
            let totalValue = this.valueOf() - number.valueOf();
    
            return new Hex(totalValue);
        }else{
            let newHex = new Hex(this.value - number);
            return newHex
        }
    }

    parse(string) {
        let result = parseInt(string ,16);
        return result;
    }

}

let FF = new Hex(255);
console.log(FF.toString());
// FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);

let newObj = (a.plus(b));
console.log(newObj.toString())

let seconObj = a.plus(5);
console.log(seconObj.toString())
console.log(FF.parse('AAA'));