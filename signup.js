document.getElementById("sign_btn").addEventListener("click", signup);
let slider = document.querySelector("#side_panel")
let rightSlider = document.querySelector("#right_slider")
let upButton = document.querySelector(".up_button")
let dnButton = document.querySelector(".down_button")

let sliderLength = document.querySelectorAll(".main_content").length
let activeSliderIndex = 0

function signup() {

   activeSliderIndex = 0
   setTimeout(() => {
      let side = document.querySelector("#side_panel");
      side.classList.toggle("open")
      let back = document.querySelector(".side-nav-overlay");
      back.classList.toggle("rotate")
   }, 2000)

   let black = document.querySelector(".side-nav-overlay")
   black.classList.toggle("overlay-active")
   let disable = document.querySelector("#full_body")
   disable.classList.toggle("disable")

   // rightSlider.style.top = `-${(sliderLength - 1) * 100}vh`;
}

upButton.addEventListener("click", () => changeSlider("up"));
dnButton.addEventListener("click", () => changeSlider("down"));

function changeSlider(direction) {
   let sliderHeight = slider.clientHeight
   console.log(sliderHeight);
   if (direction == "up") {
      if (activeSliderIndex > 0) {
         // upButton.classList.add("active");
         activeSliderIndex--
      }
   }
   if (direction == "down") {
      if (activeSliderIndex < 2) {
         activeSliderIndex++
      }

   }
   if (direction == "last") {
      if (activeSliderIndex == 2) {
         activeSliderIndex++
      }
   }
   if (direction == "first") {
      if (activeSliderIndex == 3) {
         activeSliderIndex = 0
      }
   }
   console.log(activeSliderIndex);
   rightSlider.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
   color()

}


function color() {
   if (activeSliderIndex > 0) {
      upButton.classList.add("active");
   }
   if (activeSliderIndex < 1) {
      upButton.classList.remove("active");
   }
   if (activeSliderIndex <= 1) {
      dnButton.classList.add("active");
   }
   if (activeSliderIndex > 1) {
      dnButton.classList.remove("active");
   }
}

document.getElementById("cross").addEventListener("click", close);
function close() {
   let side = document.querySelector("#side_panel");
   side.classList.toggle("open")
   let back = document.querySelector(".side-nav-overlay");
   back.classList.toggle("rotate")
   let black = document.querySelector(".side-nav-overlay")
   black.classList.toggle("overlay-active")
   let disable = document.querySelector("#full_body")
   disable.classList.toggle("disable")
   rightSlider.style.transform = `translateY(0px)`
   document.querySelector(".powered_by").classList.add("show")
   // document.querySelector(".action_button").style.display = "block"
   document.querySelector(".reload_page").classList.remove("show")
}

function ok() {
   changeSlider("down")
}

function submit() {
   let email = document.querySelector("#email").value
   if (email == "") {
      // alert("Please enter a valid email")
      let but = document.querySelector("#sumbit_email button")
      but.innerText = "! Please fill this in"
      but.classList.add("red")
   } else {
      let y = validateEmail(email)
      if (y) {

         setTimeout(() => {
            changeSlider("last")
            document.querySelector(".powered_by").classList.remove("show")
            document.querySelector(".action_button").style.display = "none"
            document.querySelector(".reload_page").classList.add("show")
         }, 1000)
      } else {

         let but = document.querySelector("#sumbit_email button")
         but.innerText = "! Hmm… that email doesn't look right"
         but.classList.add("red")
      }
   }
}

let validateEmail = (email) => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
document.querySelector("#email").addEventListener("input", email)

function email() {
   let but = document.querySelector("#sumbit_email button")
   but.innerText = "Submit"
   but.classList.remove("red")
}

function reload() {
   changeSlider("first")
   document.querySelector(".powered_by").classList.add("show")
   document.querySelector(".action_button").style.display = "block"
   document.querySelector(".reload_page").classList.remove("show")
}

