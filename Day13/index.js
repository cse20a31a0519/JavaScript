let header=document.getElementById("head")
header.style.display="flex";
header.style.gap="300px";
header.style.justifyContent="space-around";
header.style.border="2px solid black";
header.style.padding="20px";
header.style.backgroundColor="lightblue"
header.style.alignItems="center";


let se=document.getElementById("searc")
se.style.width="20rem";
se.style.height="2.5rem";
se.style.border="2px solid black";
se.style.borderRadius="0.5rem"

let signUp=document.querySelector(".signUp")
signUp.style.padding="10px";
signUp.style.borderRadius="5rem"
let Login=document.querySelector(".Login")
Login.style.padding="10px";
Login.style.borderRadius="5rem"
signUp.addEventListener("click",()=>{
  location.href="./signup.html"
})

Login.addEventListener("click",()=>{
  location.href="./login.html"
})

