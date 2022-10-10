

function deckOfCardsBuilder(array) {
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
            case 'H': newSuit = '\u2665'; break;
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

    let deck = [];

    for (let element of array) {
        let shredded = element.split('');
        let suit = shredded.pop();
        let face = shredded.join('')
        
        try{
            let newCard = createNewCard(face, suit);
            deck.push(newCard);
        }
        catch (ex) {
            // console.log(ex)
            console.log(`Invalid card: ${element}`);
            return
        }
    }

    console.log(deck.join(' '))

}

deckOfCardsBuilder(['AS', '9D', 'KH', '2C'])
deckOfCardsBuilder(['AS', '9D', '10H', '2C'])

deckOfCardsBuilder(['5S', '3D', 'QD', '1C'])