

function createPerson(first, last) {

    let personObj = {
        firstName: first,
        lastName: last,

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        set fullName(value) {
            if (typeof value !== 'string') {
                return
            }

            let shredded = value.split(' ');

            if (shredded.length !== 2) {
                return
            }
            
            let first = shredded[0];
            let second = shredded[1];

            this.firstName = first;
            this.lastName = second;

        }

    }

    return personObj

}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


let personTwo = createPerson("Albert", "Simpson");
console.log(personTwo.fullName); //Albert Simpson
personTwo.firstName = "Simon";
console.log(personTwo.fullName); //Simon Simpson
personTwo.fullName = "Peter";
console.log(personTwo.firstName);  // Simon
console.log(personTwo.lastName);  // Simpson
