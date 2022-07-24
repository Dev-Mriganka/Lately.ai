const mouseTarget1 = document.querySelector('#card_holder_name');
mouseTarget1.addEventListener('mouseenter', e => {
    mouseTarget1.style.border = '3px solid #defade';
});
mouseTarget1.addEventListener('mouseleave', e => {
  mouseTarget1.style.border = '1px solid rgb(125, 48, 125)';
});
const mouseTarget2 = document.querySelector('#card_holder_ph');
mouseTarget2.addEventListener('mouseenter', e => {
    mouseTarget2.style.border = '3px solid #f8d8d8';
});
mouseTarget2.addEventListener('mouseleave', e => {
  mouseTarget2.style.border = '1px solid rgb(125, 48, 125)';
});
const mouseTarget3 = document.querySelector('#coupon_code');
mouseTarget3.addEventListener('mouseenter', e => {
    mouseTarget3.style.border = '3px solid #defade';
});
mouseTarget3.addEventListener('mouseleave', e => {
  mouseTarget3.style.border = '1px solid rgb(125, 48, 125)';
});

// ********************************************************************
// let img = JSON.parse(localStorage.getItem("image"))
// document.getElementById("image").innerHTML = img;

let submitForm = ()=>{
    event.preventDefault();

    let cardNumber = document.getElementById('cc_number').value;
    let holderName = document.getElementById('card_holder_name').value;
    let holderPhn = document.getElementById('card_holder_ph').value;
    let coupon = document.getElementById('coupon_code').value;
    var Litely = document.querySelector('input[name="rate"]:checked').value;
    var Professionally = document.getElementById("radio2").value;
    var plan_month = document.getElementById("per_month").value;
    var plan_year = document.getElementById("per_year").value;
    let CHECKBOX = document.querySelector('input[type="checkbox"]:checked').value;

    
    if(cardNumber.length < 19){
      document.getElementById("message-cc_card").innerHTML = "*please fill valid card number"
      document.getElementById("cc_img").style.padding ="5px 10px 19px 10px";
    }
    else{
        alert("You successfully purchase plan!")
    }
}