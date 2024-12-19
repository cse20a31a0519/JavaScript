// Global scope
let globalVar = "I am global!";

function greet() {
  console.log(globalVar); // Accessing the global variable inside the function
}
greet(); // Output: "I am global!"
console.log(globalVar); // Output: "I am global!" (accessible outside the function)


function localScopeExample() {
    // Local scope
    let localVar = "I am local!";
    console.log(localVar); // Accessing the local variable inside the function
  }
  localScopeExample(); // Output: "I am local!"
  console.log(localVar); // Error: localVar is not defined (it's not accessible outside the function)
  

  var userinput1=prompt("enter you digit");
var max=userinput1[0]
for(i=0;i<userinput1.length;i++){
    if(max<userinput1[i]){
        max=userinput1[i]
    }
}
console.log(max)




var userinput2=prompt("enter you digit");
var min=userinput2[0]
for(i=0;i<userinput2.length;i++){
    if(min>userinput2[i]){
        min=userinput2[i]
    }
}
console.log(min)


var userinput3=prompt("enter you digit");
var min=userinput3[0]
var max=userinput3[0]
for(i=0;i<userinput3.length;i++){
    if(max<userinput3[i]){
        max=userinput3[i]
    }else{
        min=userinput[i]
    }
}
console.log(Number(min)+Number(max))
