

function addAndRemoveElements(array){
    let result = [];

    for (let i =0; i < array.length; i++){
        if (array[i] == "add"){
            result.push(i + 1);
        }else{
            result.pop();
        }
    }
    if (result.length >= 1){
        console.log(result.join("\n"))
    }else{
        console.log("Empty");
    }
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
)
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)

addAndRemoveElements(['remove', 
'remove', 
'remove']
)