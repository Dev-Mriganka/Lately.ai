// mouse over event
const mouseTarget = document.querySelector('#email');
mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '3px solid #20C76E ';
});
mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '2px solid  rgb(201, 197, 197)';
});

// get signup data from localStorage
let arr = JSON.parse(localStorage.getItem("users")) || [];

// create a class
let logIn = class{

  constructor(e){
    this.email = e;
  }

};
// function to catch the input value 
let submitForm = ()=>{
  event.preventDefault();

  let email = document.getElementById('email').value;

  let p = new logIn(email);

  if(check(email) == true){
    localStorage.setItem("emaiL", JSON.stringify(p))
    window.location.href = "login2.html";
  }
  else if(check(email) == false){
    alert("User doesn't exist");
  }
};

// function to compair email
let check = (Email)=>{
  let filter = arr .filter((el)=>{
    return el.email == Email;
  })

  if(filter.length > 0){
    return true;
  }
  else{
    return false;
  }
};