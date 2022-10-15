

function extendProrotype(someClass) {

    someClass.prototype.species = 'Human';
    someClass.added = 'ADDED'
    someClass.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.prototypeOf()}`
    }
}

class Person  {

    constructor (name, email) {
        this.name = name;
        this.email = email;

    }


} 

extendProrotype(Person);

let testperson = new Person('alex', 'mal');
console.log(testperson.species)
console.log(testperson)
console.log(testperson.toSpeciesString())