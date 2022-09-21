

function factory(library, orders) {

    let result = [];

    for (let obj of orders) {
        let currentObj = {

        };
        currentObj.name = obj.template.name;
        for (let part of obj.parts) {
            for (let funcName in library){
                if (funcName == part) {
                    let currentFunc = library[funcName]
                    currentObj[part] = currentFunc;
                }
            }
        }
        // console.log(currentObj);
        result.push(currentObj);
    }
    return result;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
const products = factory(library, orders);
console.log(products);
  
for (let product of products){
    console.log(product)
}