
// using params and Math.max allows for a greater flexibility and usage of more/less input numbers

function largestNumberAlt(...params){
    console.log(Math.max(...params));
}

largestNumberAlt(1,2,33);
largestNumberAlt(1,2,3,4,4,5,4,123123,2,2,32323);

