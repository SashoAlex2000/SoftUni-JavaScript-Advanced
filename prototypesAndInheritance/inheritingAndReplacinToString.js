



function toStringExtension() {

    class Person {

        constructor(name, email) {
            this.name = name;
            this.email = email;

        }

        toString() {

            let result = `${this.constructor.name} `;

            result += '(';
            for (let key in this) {
                result += `${key}: ${this[`${key}`]}, `;
            }
            result = result.trim()
            result = result.slice(0, -1)
            result += ')'



            return result

        }
    }

    // Object.defineProperty(Person, toString ,{
    //     enumerable: false,
    //     value:  () => {
    //         let result = `${this.constructor.name}`;

    //         result += '(';
    //         for (let key in this) {
    //             result +=`${key}: ${this[`${key}`]} `;
    //         }
    //         result += ')'



    //         return result
    //     }
    // })

    class Student extends Person {

        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

    }

    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

    }

    return {
        Person,
        Teacher,
        Student,

    }

}


let setOfClasses = toStringExtension();
let testPerson = new setOfClasses.Person('Alex', 'Malinov')
console.log(testPerson.toString())
// console.log(setOfClasses.Person)
let testStudent = new setOfClasses.Student('Alex', 'Malinov', 'JS Advanced')
console.log(testStudent.toString())