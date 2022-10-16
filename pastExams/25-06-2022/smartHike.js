

class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {

        };
        this.listOfHikes = [

        ];
        this.resources = 100;

    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }else{
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike(peak, time, difficultyLevel ) {

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }else {
            if (this.resources <= 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
            let currentNeededenergy = time * 10;
            if (currentNeededenergy > this.resources) {
                return "You don't have enough resources to complete the hike";
            }else {
                this.resources -= currentNeededenergy;
                let currentObj = {
                    peak,
                    time,
                    difficultyLevel
                }
                this.listOfHikes.push(currentObj);

                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
            }
        }
    }

    rest (time) {
        let currentReplenishment = time * 10;
        this.resources += currentReplenishment;

        if (this.resources >= 100) {
            this.resources = 100;
            return "Your resources are fully recharged. Time for hiking!"
        }else {
            return `You have rested for ${time} hours and gained ${currentReplenishment}% resources`
        }

    }

    showRecord (criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        
        if (criteria === 'easy' || criteria === 'hard') {
            let currentList = [];
            for (let hike of this.listOfHikes) {
                if (hike.difficultyLevel === criteria) {
                    currentList.push(hike);
                }
            }

                if (currentList.length === 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }

                let bestIndex = -1;
                let bestTime = 99999999;

                for (let i = 0; i < currentList.length; i++ ) {
                    if (currentList[i].time < bestTime) {
                        bestTime = currentList[i].time;
                        bestIndex = i;
                    }
                }

                let bestHike = currentList[bestIndex];

                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;

            

        }else {
            let result = "All hiking records:\n";

            for (let hike of this.listOfHikes) {
                result += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
            }
            result = result.trim();
            
            return result
        }

    }

}


let testhike = new SmartHike('Hiker');
console.log(testhike.goals)
console.log(testhike.addGoal('Musala', 2995))
console.log(testhike.goals)
console.log(testhike.addGoal('Musala', 2995))
console.log(testhike.addGoal('K2', 7252))
console.log(testhike.addGoal('Everest', 8785))
// testhike.resources = 0
// console.log(testhike.hike('Everest', 1, 1))
console.log(testhike.hike('Musala', 4.5, 'easy'))
console.log(testhike.rest(20))

console.log(testhike.hike('K2', 6, 'hard'))
console.log(testhike.rest(20))

console.log(testhike.hike('Everest', 7, 'hard'))
console.log(testhike.rest(20))

for (let element of testhike.listOfHikes) {
    console.log(element)
}
console.log(testhike.listOfHikes)

console.log(testhike.showRecord('hard'))

console.log('******************************')

// test input 1
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

//test input 2
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

//test input 3
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

//test input 4
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

//test input 5
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
