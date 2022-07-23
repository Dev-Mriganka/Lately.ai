document.getElementById("sign_btn").addEventListener("click",signup);

function signup()
{
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
//     let image=document.createElement("img");
//     image.setAttribute("id","buffering_image")
//     image.src = "https://c.tenor.com/zXFBtV7hHR8AAAAM/loading-buffering.gif";
//     setTimeout(function () {

//         window.location.href="function.html";
       
//     }, 3000)

//     document.querySelector("body").append(image);
   
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
   // setTimeout(() => {
   //    let x = document.querySelector(".side-nav-overlay img")
   //       .src = "./giphy.gif";
   // }, 2000)
}