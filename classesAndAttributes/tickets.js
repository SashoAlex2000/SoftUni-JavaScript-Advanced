

function railwayStation(arr, criteria) {
    console.log(criteria)
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }


    }

    for (let element of arr) {
        let shredded = element.split("|");

        let [destination, price, status] = [shredded[0], Number(shredded[1]), shredded[2]];

        // let newObj = {
        //     destination, price, status
        // }

        let newObj = new Ticket(destination, price, status)

        tickets.push(newObj);
    
    }
    if (criteria == 'status' || criteria == 'destination'){
        tickets.sort((a,b) => a[criteria].localeCompare(b[criteria]));
    }else {
        tickets.sort((a,b) => a.price - b.price)
    }
    
    return tickets
}
// 

let result = railwayStation(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)

console.log(result)

for (let ticket of result) {
    console.log(ticket)
}

let secondResult = railwayStation(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)

for (let ticket of secondResult) {
    console.log(ticket)
}

let thirdResult = railwayStation(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
)

for (let ticket of thirdResult) {
    console.log(ticket)
}