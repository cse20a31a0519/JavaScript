function a(){
    alert("onclick alert");
}  //this is inline binding for onclick method 


//inline binding for double click
let imgAnushka = document.querySelector("#anu")
function image(){
   imgAnushka.src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/01/full/1612168138-9794.jpg?im=FitAndFill=(826,465)"
}


//event binding for onclick
let prabasImg=document.getElementById("anushka");

prabasImg.onclick= function (){
        prabasImg.src="https://m.media-amazon.com/images/M/MV5BMzA0MWQyODUtOWQyMi00OGE3LTliYzktYTU0NWUxOTAwM2U0XkEyXkFqcGc@._V1_.jpg" 
}

let btn1=document.getElementById("btn1");
btn1.onmouseover=function (){
    btn1.style.fontSize="50px"
    btn1.style.borderBlockColor="red"
    btn1.style.color="green"
}
let btn2=document.getElementById("btn2")
btn2.onmouseleave=function (){
    btn2.style.fontSize="50px"
    btn2.style.borderBlockColor="red"
    btn2.style.color="green"
}



let btn3=document.getElementById("btn3");
btn3.onclick=function (){
    btn3.style.fontSize="70px"
    btn3.style.borderBlockColor="yellow"
    btn3.style.color="black"
}


let input=document.querySelector("input");

input.onkeypress=function (){ // it triggers in both conditions.
    document.body.style.backgroundColor="lightblue"
}
let input1=document.getElementById("up")

input1.onkeyup=function (){ //triggers when the user releases the key
    document.body.style.backgroundColor="Blue"
}
let input2=document.getElementById("down");

input2.onkeydown=function (){ //triggers when the user presses a key.
    document.body.style.backgroundColor="Yellow"
}

//the querselectorall takes the output in the form of nodelist same like an arra it is accesed through index .
let pTags=document.querySelectorAll("p");
for ( i=0;i<pTags.length;i++){
    pTags[i].style.backgroundColor="pink"
}