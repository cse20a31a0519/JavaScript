var a=10;
var b=20;
console.log(a && b); // =>20
console.log(a>b && a<b);   // 10>20 && 10<20    ==> false
console.log(a<b && a>b);   // 10<20 && 10>20    ==> false
console.log(false && true);  




var a=20;
var b=0;
console.log(b && a);
console.log(a>b && a<b);            // 10>20 && 10<20    ==> false
console.log(a<b && a>b);                // 10<20 && 10>20    ==> false
console.log(false && true);  




 var a=10;
 var b=0;
 var c=10;


 console.log(a<b || a<b || c>b);         //  a<b || a<b || c>a  ==>  false || c>b ==>false || true


var a=10;
console.log(!!a);                        //  !!a ==> !!10 ==> !false ==>true
var z=!true;
console.log(!z);




if(!!"Teju"){
    alert("hello teja good morning")
}else{
    alert("Not matched the name !!!!")
}


if(10 && 10){                               // if(true)
    alert("it is true")
}else{
    alert("it is false !!!!")
}
       


if(["Teju"] && [1,2,3]){                    // ["Teju"] && [1,2,3] == true  if(true)
    alert("hello teja good morning")
}else{
    alert("Not matched the name !!!!")
}


if(["Teju"] == [1,2,3]){                    // ["Teju"] == [1,2,3] == true  if(true)
    alert("hello teja good morning")
}else{
    alert(" it is false !!!!")
}


if(["Teju"] && []){                         // ["Teju"] &&[] == true  if(true)
    alert("hello teja good morning")
}else{
    alert("it is false !!!!")
}


if(["Teju"] && ""){                         // ["Teju"] &&"" == false  if(true)
    alert("hello teja good morning")
}else{
    alert("it is false !!!!")
}


 if(["Teju"] && undefined){                       // ["Teju"] &&"" == false  if(true)
    alert("hello teja good morning")
 }else{
    alert("it is false !!!!")
}






 if(null && null){                                  //null && null ==> False so else
     alert("hello there good morning")
 }else{
     alert("it is false !!!!")
}


 if("" || 10){  
     alert("hello there good morning")
 }else{
     alert("it is false !!!!")
 }


if(["Teju"] || undefined){  
     alert("hello there good morning")
     }else{
           alert("hello there see you tmrw !!!!")
}
if(["Teju"] || ""){                         // ["Teju"] &&"" == true  if(true)
        alert("hello teja good morning")
    }else{
        alert("it is false !!!!")
    }


if(null || null){                                  //null && null ==> False so else
         alert("hello there good morning")
     }else{
         alert("it is false !!!!")
    }

