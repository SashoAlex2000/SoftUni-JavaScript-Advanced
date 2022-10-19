
class ArtGallery {

    constructor(creator) {
        this.creator = creator;

        this.possibleArticles = {"picture":200,
        "photo":50,
        "item":250 
        }

        this.listOfArticles = [];

        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        let exists = false;

        for (let article of this.listOfArticles) {
            if (article.articleName === articleName) {
                if (article.articleModel === articleModel.toLowerCase()) {
                    article.quantity += quantity;
                    exists = true;
                }
            }
        }

        if (exists) {
            //pass
        }else {

            let newObj = {
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity,
            }

            this.listOfArticles.push(newObj);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {

        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        let currentPoints = -1;
        if (personality === 'Vip'){
            currentPoints = 500;
        }else if (personality === 'Middle') {
            currentPoints = 250;
        }else {
            currentPoints = 50;
        }

        let newObj = {
            guestName,
            points: currentPoints,
            purchaseArticle: 0,
        }

        this.guests.push(newObj);

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        let guestIndex = -1;

        for (let i = 0; i < this.guests.length; i++) {
            let currentGuest = this.guests[i];
            if(currentGuest.guestName === guestName) {
                guestIndex = i;
            }
        }


        let articleIndex = -1

        for (let i = 0; i < this.listOfArticles.length; i++) {

            let currentArticle = this.listOfArticles[i]

            if(currentArticle.articleName === articleName) {
                if (currentArticle.articleModel === articleModel.toLowerCase()) {
                    
                    articleIndex = i

                    if (currentArticle.quantity <= 0) {
                        return `The ${articleName} is not available.`
                    }
                }
            }

        }

        if (articleIndex < 0) {
            throw new Error("This article is not found.");
        }

        if (guestIndex < 0) {
            return "This guest is not invited.";
        }

        let neededPoints = this.possibleArticles[articleModel.toLowerCase()];

        if (this.guests[guestIndex].points < neededPoints) {
            return "You need to more points to purchase the article."
        }else {
            this.listOfArticles[articleIndex].quantity -= 1;
            this.guests[guestIndex].points -= neededPoints;
            this.guests[guestIndex].purchaseArticle += 1;
            return `${guestName} successfully purchased the article worth ${neededPoints} points.`
        }


    }

    showGalleryInfo (criteria) {


        if (criteria === 'article') {
            let result = `Articles information:\n`;

            for (let article of this.listOfArticles) {
                result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            }
            result =result.trim()

            return result;
        }else if (criteria === 'guest'){
            let result = `Guests information:\n`;

            for (let guest of this.guests) {
                result += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }
            result = result.trim()
            return result;
        }
    }

}


let testArtGallery = new ArtGallery('Alex Malinoff');

console.log(testArtGallery.addArticle('Item', 'Chinese vase', 1))
console.log(testArtGallery.addArticle('Picture', 'Mona Lisa - Totally the original', 1))

for (let article of testArtGallery.listOfArticles) {
    console.log(article)
}

console.log(testArtGallery.addArticle('Item', 'Chinese vase', 2))
console.log(testArtGallery.addArticle('photo', 'Vienna picturesque photography', 10))

for (let article of testArtGallery.listOfArticles) {
    console.log(article)
}

console.log(testArtGallery.inviteGuest('Sasho', 'Vip'))
console.log(testArtGallery.inviteGuest('Artur', 'Middle'))
console.log(testArtGallery.inviteGuest('Bernie', 'unknown'))
// console.log(testArtGallery.inviteGuest('Bernie', 'unknown'))

for (let guest of testArtGallery.guests) {
    console.log(guest)
}

console.log(testArtGallery.buyArticle('item', 'Chinese vase', 'Sasho'));
console.log(testArtGallery.buyArticle('photo', 'Vienna picturesque photography', 'Sasho'));
console.log(testArtGallery.buyArticle('photo', 'Vienna picturesque photography', 'Mr. MESEEKS'));
console.log(testArtGallery.buyArticle('Picture', 'Mona Lisa - Totally the original', 'Artur'));
console.log(testArtGallery.buyArticle('Picture', 'Mona Lisa - Totally the original', 'Artur'));
// console.log(testArtGallery.buyArticle('item', 'Austrian vase', 'Sasho'))




for (let guest of testArtGallery.guests) {
    console.log(guest)
}

console.log(testArtGallery.showGalleryInfo('article'))
console.log(testArtGallery.showGalleryInfo('guest'))


console.log('*'.repeat(18))
console.log('SoftUni test Inputs')
console.log('*'.repeat(18))

// test input 1 
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// test input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// test input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


// test input 4
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
