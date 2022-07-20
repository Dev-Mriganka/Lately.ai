let plus = document.querySelectorAll(".menu-link")
let show = document.querySelectorAll(".w-dropdown-list")
console.log(plus, show)
for (let i = 0; i < plus.length; i++) {
   plus[i].addEventListener("click", function () {
      show[i].classList.toggle("w--open")
      show.forEach(el => {
         if (el != show[i]) {
            el.classList.remove("w--open")
         }
      })
   })
}

// document.querySelector(".w-nav-button").addEventListener("click", function (){ 
//    document.querySelector(".navbar-collapse").classList.toggle("open")
// })