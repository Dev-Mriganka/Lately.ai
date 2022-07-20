document.getElementById("sign_btn").addEventListener("click",signup);

function signup()
{
    document.querySelector("body").innerHTML=null;
    let image=document.createElement("img");
    image.setAttribute("id","buffering_image")
    image.src = "https://c.tenor.com/zXFBtV7hHR8AAAAM/loading-buffering.gif";
    setTimeout(function () {

        window.location.href="function.html";
       
    }, 3000)

    document.querySelector("body").append(image);
   
}