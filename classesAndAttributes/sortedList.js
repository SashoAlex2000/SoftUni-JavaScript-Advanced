

class List {
    
    constructor () {
        this.innerList = [];
        this.size = 0
    }
    
    add(num) {
        this.innerList.push(num);
        this.size ++;
        this.innerList = this.innerList.sort((a,b) => a - b)
    }
    get(index) {
        if (index >= 0 && index < this.size){
            return this.innerList[index];
        }
    }
    remove(index) {
        if (index >= 0 && index <= this.innerList.length - 1){
            this.innerList.splice(index,1);
            this.size --;
        }
    }

}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

// console.log(list.hasOwnProperty('size'))
let myList = new List;

myList.add(5);
myList.add(52);
myList.add(2);
myList.add(-100);
myList.add(1416564100);

console.log(myList.get(0))
console.log(myList.innerList)