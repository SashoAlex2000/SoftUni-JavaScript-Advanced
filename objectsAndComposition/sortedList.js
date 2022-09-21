

function createSortedList() {

    let obj = {

        elements: new Array,
        add(element){
            console.log(this.elements)
            this.elements.push(element);
            this.size += 1;
            this.elements.sort((a, b) => a - b);

        },
        remove(index){
            if (index >= 0 && index < this.elements.length){
                this.elements.splice(index, 1);
                this.size -= 1;
                this.elements.sort((a, b) => a - b);

            }
        },
        get(index){
            if (index >= 0 && index < this.elements.length){
                return (this.elements[index]);
            }
        },
        size: 0
    };
    return obj;
}


let list = createSortedList();
console.log(list)
list.add(5);
console.log(list)

list.add(6);
list.add(7);
console.log(list.elements)
console.log(list.get(1)); 
console.log(list.elements)

list.remove(1);
console.log(list.get(1));
console.log(list.size)
