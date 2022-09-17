

function rotateArray(array, times){
    let counter = 0;

    while (counter < times){
        array.unshift(array.pop());

        counter +=1
    }
    console.log(array.join(" "));

}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)