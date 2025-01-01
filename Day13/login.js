let login = document.getElementById("login");
login.style.marginTop = "80px";
document.body.style.background = "lightblue";

let enteremail = document.getElementById("email");
enteremail.style.padding = "8px";
enteremail.style.borderRadius = "2rem";

let enterPass = document.getElementById("pswd");
enterPass.style.padding = "8px";
enterPass.style.borderRadius = "2rem";

let b = document.getElementById("btn");
b.style.padding = "10px";
b.style.borderRadius = "1rem";

login.addEventListener("submit", (e) => {
    e.preventDefault();
    let credentials=JSON.parse(localStorage.getItem("user"))
    let enterPass = document.getElementById("pswd").value;
    let enteremail=document.getElementById("email").value;

    let usercredentials=JSON.parse(localStorage.getItem("users")) || [];
    if (usercredentials.some(users => users.email===enteremail && users.password===enterPass)) {
        location.href = "./Home.html";
    }
    
});

