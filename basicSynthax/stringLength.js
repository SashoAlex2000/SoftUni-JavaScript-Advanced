

function stringLength(firstString, secondString, thirdString){
    let totalLength = 0;

    totalLength += firstString.length;
    totalLength += secondString.length;
    totalLength += thirdString.length;

    console.log(Math.floor(totalLength));

    console.log(Math.floor(totalLength / 3));


}

stringLength('chocolate', 'ice cream', 'cake')