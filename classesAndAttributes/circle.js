

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(value) {
        this.radius = value/2
        this._diameter = value;
    }
    get diameter() {
        return this.radius * 2;
    }

    get area(){
        return 2 * this.radius * Math.PI;
    }

}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(c.radius)
console.log(`Area: ${c.area}`);





