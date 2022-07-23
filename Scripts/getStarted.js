const mouseTarget = document.querySelector('#first_name');
mouseTarget.addEventListener('mouseenter', e => {
   mouseTarget.style.border = '3px solid 	#DDA0DD';
});

mouseTarget.addEventListener('mouseleave', e => {
   mouseTarget.style.border = '1px solid rgb(125, 48, 125)';
});

const mouseTarget2 = document.querySelector('#last_name');
mouseTarget2.addEventListener('mouseenter', e => {
   mouseTarget2.style.border = '3px solid 	#DDA0DD';
});

mouseTarget2.addEventListener('mouseleave', e => {
   mouseTarget2.style.border = '1px solid rgb(125, 48, 125)';
});

const mouseTarget3 = document.querySelector('#email');
mouseTarget3.addEventListener('mouseenter', e => {
   mouseTarget3.style.border = '3px solid 	#DDA0DD';
});

mouseTarget3.addEventListener('mouseleave', e => {
   mouseTarget3.style.border = '1px solid rgb(125, 48, 125)';
});

const mouseTarget4 = document.querySelector('#password1');
mouseTarget4.addEventListener('mouseenter', e => {
   mouseTarget4.style.border = '3px solid 	#DDA0DD';
});

mouseTarget4.addEventListener('mouseleave', e => {
   mouseTarget4.style.border = '1px solid rgb(125, 48, 125)';
});

const mouseTarget5 = document.querySelector('#password2');
mouseTarget5.addEventListener('mouseenter', e => {
   mouseTarget5.style.border = '3px solid 	#DDA0DD';
});

mouseTarget5.addEventListener('mouseleave', e => {
   mouseTarget5.style.border = '1px solid rgb(125, 48, 125)';
});

let users = class {

   constructor(f, l, e, p, ps, c) {
      this.firstName = f;
      this.lastName = l;
      this.email = e;
      this.password1 = p;
      this.password2 = ps;
      this.checkbox = c
   }
}

let arr = JSON.parse(localStorage.getItem("users")) || [];

let submitForm = () => {
   event.preventDefault();

   let FN = document.getElementById('first_name').value;
   let LN = document.getElementById('last_name').value;
   let email = document.getElementById('email').value;
   let PSW1 = document.getElementById('password1').value;
   let PSW2 = document.getElementById('password2').value;
   let CHECKBOX = document.querySelector('input[type="checkbox"]:checked').value;

   if (FN == "") {
      document.getElementById("message1").innerHTML = "**Fill the first name please!";
      return false;
   }
   if (LN == "") {
      document.getElementById("message2").innerHTML = "**Fill the last name please!";
      return false;
   }
   if (email == "") {
      document.getElementById("message3").innerHTML = "**Fill the last name please!";
      return false;
   }

   if (PSW1 == "") {
      document.getElementById("message4").innerHTML = "**Fill the password please!";
      return false;
   }
   if (PSW1.length < 8) {
      document.getElementById("message4").innerHTML = "**Password length must be atleast 8 characters";
      return false;
   }
   if (PSW1.length > 15) {
      document.getElementById("message4").innerHTML = "**Password length must not exceed 15 characters";
      return false;
   }
   if (PSW1 != PSW2) {
      document.getElementById("message4").innerHTML = "**Password dosen't match";
      document.getElementById("message5").innerHTML = "**Password dosen't match";
      return false;
   }
   if (PSW1 == PSW2) {

      if (CHECKBOX == "true") {
         flag = false;
         let u1 = new users(FN, LN, email, PSW1, PSW2, CHECKBOX);

         if (checkEmail(email) == true) {
            arr.push(u1)
            alert("SignUp Successfully!")
            localStorage.setItem("users", JSON.stringify(arr));
         }
         else {
            alert("User already Exits!")
         }
      }


   }

};

let checkEmail = (Email) => {
   let filter = arr.filter((el) => {
      return el.email == Email
   })
   if (filter.length == 0) {
      return true;
   }
   else {
      return false;
   }
};