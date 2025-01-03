let sincard=JSON.parse(localStorage.getItem("data"))

let pro = document.getElementById("product");
let card = document.createElement("div");
card.style.border = "2px solid black";
card.style.margin = "10px";
card.style.padding = "20px";
card.style.width = "300px";
card.style.cursor="pointer"

let imgs = document.createElement("img");
imgs.src = sincard.ima;
imgs.style.width = "100%";
card.appendChild(imgs);

let tit = document.createElement("h4");
tit.innerText = sincard.title;
card.appendChild(tit);

let pr=document.createElement("p")
pr.innerHTML=sincard.price;
pr.style.color="red";
card.appendChild(pr);

let cat=document.createElement("p")
cat.innerHTML=sincard.category;
cat.style.color="green";
card.appendChild(cat);

let rat1=document.createElement("p")
rat1.innerText=sincard.rate
card.appendChild(rat1)

let rat2=document.createElement("p")
rat2.innerText=sincard.count
card.appendChild(rat2)

pro.appendChild(card);
