

function listProcessor(arr) {
    let list = [];
    innerCommandObj = {
        
        add: (s) => list.push(s),
        remove: (n) => list.splice(list.indexOf(n),1),
        print: () => console.log(list.join(","))
    }

    for (let command of arr) {
        let shredded = command.split(" ");
        innerCommandObj[shredded[0]](shredded[1]);
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])