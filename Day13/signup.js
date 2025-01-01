let signUp=document.getElementById("register");
signUp.style.background="lightblue"
signUp.style.marginTop="80px";
document.body.style.background="lightblue"

let nam=document.getElementById("name");
nam.style.padding="8px";
nam.style.borderRadius="2rem";

let email=document.getElementById("email");
email.style.padding="8px";
email.style.borderRadius="2rem";


let password=document.getElementById("pswd");
password.style.padding="8px";
password.style.borderRadius="2rem";


let b=document.getElementById("btn");
b.style.padding="8px";
b.style.borderRadius="2rem";

signUp.addEventListener("submit", (e) => {
    e.preventDefault();
    let nam = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswd").value;

    let usercredentials=JSON.parse(localStorage.getItem("users")) || [];
    if (usercredentials.some(users => users.nam === nam)) {
        alert("Username already exists. Please use a different one.");
        return;
    }
    usercredentials.push({ nam, password,email });
    localStorage.setItem("users", JSON.stringify(usercredentials));

    alert("Signup successful! You can now login.");
    location.href = "./login.html";
})
