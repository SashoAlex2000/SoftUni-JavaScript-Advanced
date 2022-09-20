

let phonebook = {

};

phonebook["Alex"] = "11";
phonebook["Yavor"] = "2";
phonebook["Bill"] = "3";

phonebook["Elenea"] = "13";
phonebook["Andre"] = "3";

console.log(phonebook);

// let result = Object.entries(phonebook);
// for (let pair of result){
//     console.log(pair);
// }

// const sorted = {

// }; --> no need to be initialized if we use reduce() to return the data to a sorted obj

let result = Object
    .entries(phonebook) // turn the result to entries (array of tuple arrays -> [key, value]) in order to sort;
    .sort((first, second) => {
        if (Number(first[1]) > Number(second[1])) return 1;
        if (Number(first[1]) < Number(second[1])) return -1;
        // return 0
        else {
        if (first[0] > second[0]) return 1;
        if (first[0] < second[0]) return -1;
        return 0
        }
    }) // sorting by number and if equal, by name; opposite didn't work, since names couldn't be equal and are sort always return 1 or -1;
    
    // .forEach(pair => {
    //     sorted[pair[0]] = pair[1];
    // }) --->> returning the data back into a sorted object with forEach() 
    .reduce((sorted, current) => {
        let key = current[0];
        let value = current[1];
        sorted[key] = value;
        return sorted;
    }, {}); // ---> using reduce()


console.log(result)
// for (let pair of result){
//     console.log(pair);
// }