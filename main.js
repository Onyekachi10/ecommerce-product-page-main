(function () {

    "uses strict"

    function block() {
const cart = document.querySelector("#cart")
const block = document.querySelector(".picBlock")
cart.addEventListener("click",function (evt) {
  evt.preventDefault()
cart.classList.toggle("active")
block.classList.toggle("active")

})
}
block()

  

 function menuBtn () {
    const menu = document.querySelector(".menu-bar")
    const nav = document.querySelector(".nav-items")
    const ava = document.querySelectorAll(".ava")
    
    menu.addEventListener("click",function() {
        menu.classList.toggle("menu-bar_active")
        nav.classList.toggle("nav-items_active")
        ava.forEach(function(btn) {
            btn.classList.toggle("nav_active")
        })
    })
 }
menuBtn() 

let counter = 0
function addToCart() {
    const add = document.querySelector("#plus")
    const min = document.querySelector("#min")
  
 
    add.addEventListener("click", function (evt) {
     evt.preventDefault()
     const number = document.querySelector(".num")
      counter++;
     number.innerHTML = counter

    })
    
    min.addEventListener("click",function (evt) {
     evt.preventDefault()
     const number = document.querySelector(".num")
     counter --
     number.innerHTML = counter
    })
 }
 addToCart()

 const hidep = document.querySelector(".picp")
 const hidep_2 = document.querySelector(".picp_2")
 const hide_input = document.querySelector("#check")
 const showCart = document.querySelector("#add_cart")
 function cart() {
   
    hidep.innerHTML = `<p class="picp">Your cart is empty</p>`
    hidep_2.style.display = "none"
    hide_input.style.display = "none"
}
cart()
    showCart.addEventListener("click", function(evt) {
        evt.preventDefault()
        const hideCart = document.querySelector("#hiddenCart")
        hideCart.style.display = "block"
        hide_input.style.display = "block"
        hidep_2.style.display = "block"
        hidep.innerHTML = `<p class="picp">
        <img src="./images/image-product-1-thumbnail.jpg" width="60"
        class="product" alt="shoe">
          Fall Limited Edition Sneakers
          </p>`
    })




 function removeCart() {
    const bin = document.querySelector(".delete")

    bin.addEventListener("click", function() {
        cart()
    })
 }
 removeCart()



 function changePic () {
  const replaceImg = document.querySelector("#shoe")
  const img1 = document.querySelector("#shoe_1")
  const img2 = document.querySelector("#shoe_2")
  const img3 = document.querySelector("#shoe_3")
  const img4 = document.querySelector("#shoe_4")

  img1.addEventListener("click",function() {
    // replaceImg.classList.add('replace')
    replaceImg.innerHTML = `<img src="./images/image-product-1.jpg" 
    alt="pic"width="500" class="replace">`
   
  })

  img2.addEventListener("click",function(){
    // replaceImg.classList.add("replace")
    replaceImg.innerHTML = `<img src="./images/image-product-2.jpg"
     alt="pic" width="500" class="replace">`
     
  })

  img3.addEventListener("click",function(){
    // replaceImg.classList.add("replace")
    replaceImg.innerHTML = `<img src="./images/image-product-3.jpg" 
    alt="pic" width="500" class="replace">`
   
  })

  img4.addEventListener("click",function(){
    // replaceImg.classList.add("replace")
    replaceImg.innerHTML = `<img src="./images/image-product-4.jpg" 
    alt="pic" width="500" class="replace"> `
   
     
  })





 }
 changePic()
})


()

