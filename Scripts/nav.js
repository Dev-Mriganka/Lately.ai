let plus = document.querySelectorAll(".menu-link")
let show = document.querySelectorAll(".m-w-dropdown-list")
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

document.querySelector("#button-touch").addEventListener("click", function () {
   document.querySelector("#navbar-touch").classList.toggle("open")
   show.forEach(el => {
      el.classList.remove("w--open")
   })
})



var height = $('#top-add').height();

$(window).scroll(function () {
   if ($(this).scrollTop() > height) {
      $('.navigation-full').addClass('fixed')
      $('.main-wrapper').addClass('fixed')
   } else {
      $('.navigation-full').removeClass('fixed')
      $('.main-wrapper').removeClass('fixed')
   }
})


// document.onclick = function (e) {
//    if (e.target.id !== "navbar-touch" && e.target.id !== 'button-touch' && e.target.classList !== "navbar-nav") {
//       document.querySelector(".navbar-collapse").classList.remove("open")
//    }
// }


// window.addEventListener('mouseup', function (event) {
//    var box = document.querySelector(".navbar-collapse");
//    if (event.target != box && event.target.parentNode != box) {
//       box.classList.remove("open");
//    }
// });