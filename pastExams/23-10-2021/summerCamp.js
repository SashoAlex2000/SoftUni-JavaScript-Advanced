

class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp  = {"child": 150,
        "student": 300,
        "collegian": 500
        }

        this.listOfParticipants  = [

        ];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        
        for (let participant of this.listOfParticipants) {
            if (participant.name === name) {
                return `The ${name} is already registered at the camp.`
            }
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let currentObj = {
            name,
            condition,
            power: 100,
            wins: 0,
        }

        this.listOfParticipants.push(currentObj);

        return `The ${name} was successfully registered.`

    }

    unregisterParticipant(name) {

        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let currentParticipant = this.listOfParticipants[i];

            if (currentParticipant.name === name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }
        }

        throw new Error(`The ${name} is not registered in the camp.`)

    }

    timeToPlay(typeOfGame, participant1, participant2='default') {

        if (typeOfGame === 'WaterBalloonFights') {
            
            let firstPlayer = -1;
            let secondPlayer = -1;

            for (let i = 0; i < this.listOfParticipants.length; i++) {
                let participant = this.listOfParticipants[i];
                if (participant.name === participant1) {
                    firstPlayer = i;
                }
                if (participant.name === participant2) {
                    secondPlayer = i;
                }
            }

            if (firstPlayer < 0 || secondPlayer < 0) {
                throw new Error("Invalid entered name/s.");
            }

            let playerOne = this.listOfParticipants[firstPlayer];
            let playerTwo = this.listOfParticipants[secondPlayer];

            if (playerOne.condition !== playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            let diff = playerOne.power - playerTwo.power;

            if ( diff < 0) {
                this.listOfParticipants[secondPlayer].wins += 1;
                return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`;
            }else if (diff > 0) {
                this.listOfParticipants[firstPlayer].wins += 1;
                return `The ${playerOne.name} is winner in the game ${typeOfGame}.`;
            }else {
                return `There is no winner.`;
            }


        }else { // logic for Battleship
            for (let camper of this.listOfParticipants) {

                if (camper.name === participant1) {
                    camper.power += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`;
                }

            }

            throw new Error(`Invalid entered name/s.`)

        }

    }

    toString() {

        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        let sortedParticipants = this.listOfParticipants.sort((a,b) => b.wins - a.wins);

        for (let participant of sortedParticipants) {
            result += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`
        }

        result = result.trim();

        return result;

    }

}


let testCamp = new SummerCamp('Alex Malinov CAMPS Ltd.', 'Slunchaka');

// console.log(testCamp.registerParticipant('Lazlo', 'Monkey', 50))
console.log(testCamp.registerParticipant('Lazlo', 'student', 50))
console.log(testCamp.registerParticipant('Lazlo', 'student', 2500))
console.log(testCamp.registerParticipant('Lazlo', 'student', 2500))
console.log(testCamp.registerParticipant('Bobby', 'student', 2500))
console.log(testCamp.registerParticipant('Alex', 'collegian', 2500))
console.log(testCamp.registerParticipant('Sasho', 'collegian', 3000))
console.log(testCamp.registerParticipant('Anti-Sasho', 'collegian', 3000))



console.log(testCamp.unregisterParticipant('Alex'));
// console.log(testCamp.unregisterParticipant('Alex'));

console.log(testCamp.timeToPlay('Battleship', 'Sasho'))
console.log(testCamp.timeToPlay('Battleship', 'Lazlo'))

for (let camper of testCamp.listOfParticipants) {
    console.log(camper);
}

console.log(testCamp.timeToPlay('WaterBalloonFights', "Sasho", "Anti-Sasho"))
console.log(testCamp.timeToPlay('WaterBalloonFights', "Sasho", "Anti-Sasho"))
console.log(testCamp.timeToPlay('WaterBalloonFights', "Lazlo", "Bobby"))

for (let camper of testCamp.listOfParticipants) {
    console.log(camper);
}

console.log(testCamp.toString())

console.log('*******************')
console.log('SoftUni test inputs')
console.log('*******************')

//test input 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

//test input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// // console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


//test input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

//test input 4
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
