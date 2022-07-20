const toggle = document.querySelector(".toggle");

const toggleBtn = document.querySelector(".toggle_btn");
toggle.addEventListener("click", (e) => {
  //console.log("change night mode")
  toggleBtn.classList.toggle("night-mode");
   document.querySelector("#annually").classList.toggle("show");
   document.querySelector("#monthly").classList.toggle("show");
});
