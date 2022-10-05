

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {

      let seacrchedText = document.getElementById('searchField').value
      console.log(`the searched word is ${seacrchedText}`)

      let peopleList = Array.from(document.querySelectorAll('tr'));
      console.log(peopleList)

      for (let person of peopleList) {
         person.classList.remove('select')
      }


      for (let person of peopleList) {
         console.log(person.innerText);
         console.log(person.childNodes);
         let isSpecial = false; 

         for (let row of person.childNodes) {
            // console.log(row.innerText);
            if (row.innerText !== undefined){
               console.log(row.innerText)
               if (row.innerText.includes(seacrchedText) === true) {
                  person.classList.add('select')
                  console.log('added the class')
               }
            }
            

         }
      }

   }
}

