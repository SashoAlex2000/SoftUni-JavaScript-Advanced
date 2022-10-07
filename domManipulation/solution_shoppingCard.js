function solve() {
   //TODO...
   let itemsBought = new Set();
   let totalSum = 0

   let shoppingCard = document.getElementsByClassName('shopping-cart')[0];
   console.log(shoppingCard);
   let result = document.getElementsByTagName('textarea')[0];

   shoppingCard.addEventListener('click', function (event) {
      if (event.target.nodeName !== "BUTTON") {
         return;
      }
      if (event.target.classList.contains('checkout') === true){
         console.log("CHECKOUT WORKS");
         return;
      }

      console.log("CLECKED")
      let productElement = event.target.parentElement.parentElement;
      console.log(productElement);

      let name = productElement.querySelectorAll('.product-title')[0].textContent;
      let price = productElement.querySelectorAll('.product-line-price')[0].textContent;

      console.log(`${name} ${price}`)

      totalSum += Number(price);
      itemsBought.add(name);
      console.log(totalSum)

      result.textContent += `Added ${name} for ${price} to the cart.\n`;
   });


   let btn = document.getElementsByClassName('checkout')[0];
   
   btn.addEventListener('click', checkoutTime);

   function checkoutTime (event) {
      console.log("THE EVENT IS :::")
      console.log(event.target);
      result.textContent += `You bought ${new Array(...itemsBought).join(', ')} for ${totalSum.toFixed(2)}.`;

      let buttonsList = shoppingCard.getElementsByClassName('add-product');
      console.log("THE BUTTONS:")
      console.log(buttonsList);

      for (let button of buttonsList) {
         button.disabled = true;
      }
      
      event.target.disabled = true;
   }

}

