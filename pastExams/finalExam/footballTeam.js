

class footballTeam {

    constructor (clubName, country) {
        this.clubName = clubName;
        this.country = country;

        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let curr = [];

        for (let string of footballPlayers) {

            let shredded = string.split('/');

            let [name, age, playerValue] = [shredded[0], Number(shredded[1]), Number(shredded[2])];
            let exists = false;

            for (let playerObj of this.invitedPlayers) {

                if (playerObj.name === name) {
                    
                    exists = true;

                    if (playerObj.playerValue < playerValue) {
                        playerObj.playerValue = playerValue
                    }
                }
    
            }

            if (!exists) {
                let newObj = {
                    name,
                    age,
                    playerValue,
                }

                this.invitedPlayers.push(newObj)
            }

            if (curr.indexOf(name) < 0) {
                curr.push(name);
            }
    
            
        }

        return `You successfully invite ` + curr.join(', ') + '.';
        
    }

    signContract(selectedPlayer) {

        let shredded = selectedPlayer.split('/');

        let [name, offerPrice] = [shredded[0], Number(shredded[1])];

        for (let player of this.invitedPlayers) {

            if (player.name === name) {

                if (player.playerValue > offerPrice) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - offerPrice} million more are needed to sign the contract!`)
                }

                player.playerValue = 'Bought';

                return `Congratulations! You sign a contract with ${name} for ${offerPrice} million dollars.`;

            }

        }

        throw new Error(`${name} is not invited to the selection list!`);

    }

    ageLimit(name, age) {

        for (let player of this.invitedPlayers) {

            if (player.name === name) {

                if (player.age >= age) {
                    return `${name} is above age limit!`
                }else {

                    if (age - player.age <5) {
                        return `${name} will sign a contract for ${age - player.age} years with ${this.clubName} in ${this.country }!`
                    }else {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }

                }

            }

        }

        throw new Error(`${name} is not invited to the selection list!`);

    }

    transferWindowResult() {

        let result = `Players list:\n`;

        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))

        for (let player of sortedPlayers) {

            result += `Player ${player.name}-${player.playerValue}\n`

        }

        result = result.trim();

        return result

    }


}

let testClub = new footballTeam('Levski', 'Sofia');

console.log(testClub.newAdditions(['sasho/22/1', 'gosho/25/5']))
console.log(testClub.newAdditions(['sasho/22/7', 'venci/30/2', 'sasho/22/2']))
console.log(testClub.newAdditions(['Aaxl/22/7', 'Zaza/30/2', 'sasho/22/2']))

for (let player of testClub.invitedPlayers) {
    console.log(player)
}

console.log(testClub.signContract('sasho/8'))
// console.log(testClub.signContract('sasho/5'))
// console.log(testClub.signContract('ALEX/22'))

for (let player of testClub.invitedPlayers) {
    console.log(player)
}

console.log(testClub.ageLimit('sasho', 25))
console.log(testClub.ageLimit('sasho', 30))
console.log(testClub.ageLimit('sasho', 19))
// console.log(testClub.ageLimit('berbatov', 19))

console.log(testClub.transferWindowResult())


console.log('*'.repeat(15))

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// // console.log(fTeam.signContract("Barbukov/10"));

// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
