

function heroicInventory(array){
    let result = [];

    for (let element of array) {
        let shredded = element.split(" / ");

        let [heroName, currLevel, inventory] = [shredded[0], shredded[1], shredded[2]];
        inventory = inventory ? inventory.split(", ") : []; // we need to do this, 
                                                            //in case the hero doesn't have any items
        
        let currentObj = {
            name: heroName,
            level: Number(currLevel), 
            items: inventory
        };
        result.push(currentObj);

    }
    // let final = [];
    // for (let hero of result) {
    //     final.push(JSON.stringify(hero));
    // }

    console.log(JSON.stringify(result))

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])