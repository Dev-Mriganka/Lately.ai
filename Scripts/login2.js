const mouseTarget1 = document.querySelector('#email');
mouseTarget1.addEventListener('mouseenter', e => {
  mouseTarget1.style.border = '4px solid #ADD8E6';
});
mouseTarget1.addEventListener('mouseleave', e => {
  mouseTarget1.style.border = '2px solid  rgb(201, 197, 197)';
});

const mouseTarget2 = document.querySelector('#password');
mouseTarget2.addEventListener('mouseenter', e => {
  mouseTarget2.style.border = '4px solid #ADD8E6';
});
mouseTarget2.addEventListener('mouseleave', e => {
  mouseTarget2.style.border = '2px solid  rgb(201, 197, 197)';
});


let arr = JSON.parse(localStorage.getItem("users")) || [];
// console.log(arr)
let login_email = JSON.parse(localStorage.getItem("emaiL"))
document.getElementById("email").value = login_email.email;


let flag1 = false;
let flag2 = false;

let loginForm = ()=>{
    event.preventDefault();

     let Password = document.getElementById("password").value;
     arr.forEach(({checkbox,email,firstName,lastName,password1,password2})=>{
          if(password1==Password){
            flag1= true;
          }
          else if(password1 !== Password){
            flag2 = true;
          }
     })

     if(flag1==true){
        alert("login successfully");
        document.getElementById("password").innerHTML = null;
        document.getElementById("email").innerHTML = null;
        window.location.href="selectPlatform.html"
     }
     else if(flag2==true){
        alert("Wrong Password!")
     }
     else{
        alert("wrong credential")
     }
   
}
