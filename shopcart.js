var
 plusbutton=document.getElementsByClassName("plus")
 console.log(plusbutton)
 for(let i = 0; i<plusbutton.length; i++){
   
    plusbutton[i].addEventListener("click",function(){
    plusbutton[i].nextElementSibling.innerHTML ++
  })
}

var minusButton=document.getElementsByClassName("minus")
for(let i=0;i<minusButton.length;i++){
   minusButton[i].addEventListener("click",function(){
     if(minusButton[i].previousElementSibling.innerHTML >0){
    minusButton[i].previousElementSibling.innerHTML --
     }
  })
}

var trash=Array.from(document.getElementsByClassName("fa-trash"))
console.log(trash,"hello")
for(let i=0;i<trash.length;i++){
  trash[i].addEventListener("click",function(){
    trash[i].parentNode.remove()
  })
}

document.addEventListener("DOMContentLoaded", function() {
  var plusButtons = document.getElementsByClassName("plus");
  var minusButtons = document.getElementsByClassName("minus");
  var hearts = document.getElementsByClassName("heart");
  var trashButtons = document.getElementsByClassName("fa-trash");

  
  function updateTotal() {
      var total = 0;
      var products = document.getElementsByClassName("product");
      Array.from(products).forEach(function(product) {
          var price = parseFloat(product.querySelector(".price").innerHTML.replace('$', ''));
          var quantity = parseInt(product.querySelector(".counter").innerHTML);
          total += price * quantity;
      });
      document.getElementById("total").innerHTML = total.toFixed(2);
  }


  Array.from(plusButtons).forEach(function(plus) {
      plus.addEventListener("click", function() {
          var counter = plus.nextElementSibling;
          counter.innerHTML = parseInt(counter.innerHTML) + 1;
          updateTotal();
      });
  });

  
  Array.from(minusButtons).forEach(function(minus) {
      minus.addEventListener("click", function() {
          var counter = minus.previousElementSibling;
          if (parseInt(counter.innerHTML) > 0) {
              counter.innerHTML = parseInt(counter.innerHTML) - 1;
              updateTotal();
          }
      });
  });

 
  Array.from(trashButtons).forEach(function(trash) {
      trash.addEventListener("click", function() {
          trash.parentNode.remove();
          updateTotal();
      });
  });

  
  Array.from(hearts).forEach(function(heart) {
      heart.addEventListener("click", function() {
          heart.classList.toggle("fa-heart");
          heart.classList.toggle("fa-heart-o");
      });
  });

  
  updateTotal();
});
