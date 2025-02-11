async function card() {
    let data=await fetch('https://fakestoreapi.com/products')
    let fakedata=await data.json();
    console.log(fakedata)    
    let cartItemsContainer=document.getElementById("Card")
    cartItemsContainer.style.display="flex";
    cartItemsContainer.style.flexWrap="wrap";
    cartItemsContainer.style.gap="40px"

fakedata.forEach(x=>{
    let card=document.createElement("div")
    card.className="card"
    card.style.border="2px solid black"
    card.style.width="300px";
    card.style.height="400px"
    card.innerHTML= `
    <img src=${x.image} alt="${x.id}" width="180px"/>
                  <p>${x.title}</p>
                  <span>${x.price}</span>
                  <button id="rm">Remove</button>
    `
    cartItemsContainer.append(card)

    card.querySelector("#rm").addEventListener("click",()=>{
        cartItemsContainer.removeChild(card)
    })

})
}
card()