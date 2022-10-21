
function sortArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a,b) => {

        if (a.length < b.length) {
            return -1;
        }

        if (a.length > b.length) {
            return 1
        }

        else {
            return a.localeCompare(b);
            
        }

    })

    for (let element of sortedArray) {
        console.log(`${element}`)
    }

}


sortArrayByTwoCriteria(['alpha', 
'betaaaaaaaaa', 
'amgaaa',
'gammaa',
'amagaa']
)