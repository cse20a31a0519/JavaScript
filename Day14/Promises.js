const step1=new Promise((resolve, reject)=>{
    try{
        if(1){
            setTimeout(()=>{
            resolve("Resolve Sucessfully  step 1")
            let p= document.getElementById("pro")
            p.innerText="Resolve Sucessfully step 1 but failed at step2"
            },2000)
             }else{
                setTimeout(()=>{
                       reject("failed at step 1")
                },2000)
             }
    }catch(err){
                      reject(`error at step1 ${err.message}`);
                      
    }
});


const step2=new Promise((resolve, reject)=>{
try{
if(0){
    setTimeout(()=>{
    resolve("Resolve Sucessfully at step2")
    },2000)
     }else{
        setTimeout(()=>{
               reject("failed at step 2")
        },2000)
     }
}
catch(err){
reject(`error at step2 ${err.message}`);
}
});



step1.then(res=>{
console.log(res)
return step2;
}
).then(res=>{
console.log(res)
return step2;
// return step3
})
.catch(err=>{
console.log(err);
})




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