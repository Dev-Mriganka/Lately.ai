document.getElementById("sign_btn").addEventListener("click",signup);

function signup()
{
   let side = document.querySelector("#side_panel");
   side.classList.toggle("open")
   let black = document.querySelector(".side-nav-overlay")
   black.classList.toggle("overlay-active")
   let disable = document.querySelector("#full_body")
   disable.classList.toggle("disable")
   setTimeout(() => {
      let x = document.querySelector(".side-nav-overlay img")
      .src = "";
   }, 2000)
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
   let black = document.querySelector(".side-nav-overlay")
   black.classList.toggle("overlay-active")
   let disable = document.querySelector("#full_body")
   disable.classList.toggle("disable")
   setTimeout(() => {
      let x = document.querySelector(".side-nav-overlay img")
         .src = "./giphy.gif";
   }, 2000)
}