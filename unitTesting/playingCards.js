

function createNewCard(face, suit) {

    let stringFaces = [];

    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    .forEach(x => stringFaces.push(x.toString()));

    // console.log(stringFaces);

    if (stringFaces.indexOf(face) === -1) {
        throw new Error('Error')
    }
    let newSuit;
    
    switch (suit) {
        case 'S': newSuit = '\u2660'; break;
        case 'H': newSuit = '\u2666'; break;
        case 'D': newSuit = '\u2666'; break;
        case 'C': newSuit = '\u2663'; break;
    }


    let cardObj = {
        face: face,
        suit: newSuit,
        toString(){
            return `${this.face}${this.suit}`;
        }
    }

    return cardObj

}

let firstCard = createNewCard('A','S')
console.log(firstCard.toString())

let secondCard = createNewCard('7','H')
console.log(secondCard.toString())

let thirdCard = createNewCard('13', 'C')