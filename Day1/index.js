var UserInput=prompt("enter your age for voting");
if(UserInput>=18)                                           // if input is greater than 18 you are eligible to vote
{           
  console.log("Your are eligible to vote");
}
else{                                                       //else input is less than 18 you are not eligible to vote
    console.log("you are not eligbile vote");
}
var Input=prompt("enter the Gender in boy or girl");
var Input2=prompt("enter age for marriage")
var b="boy";
var g="girl";
if(Input==b){                                               // if input is a boy enter into if block
    if(Input2>=21){                                         // if input is greater than 21 you are eligible for marriage
        console.log("You are elgible for Marriage");
    }
    else{                                                   //else input is less than 21 you are not eligible for marriage
        console.log("Not eligible");
    }
}
if(Input==g){                                               // if input is a boy enter into if block
    if(Input2>=18){                                         // if input is greater than 18 you are eligible for marriage
        console.log("You are elgible for Marriage");
    }
    else{                                                   //else input is less than 18 you are not eligible for marriage
        console.log("Not eligible");   
    }
}
var Input3=prompt("enter age for Driving  license.");
if(Input2>=18){                                                 // if input is greater than 18 you are eligible for Driving  license.
      console.log("Your are eligible for Driving  license.");
    }
else{                                                               // else input is less than 18 you are not eligible for Driving  license.
        console.log("you are not eligbile for Driving license.");
    }
var Input3=prompt("enter attendence percentage  to appear for an exam"); // if input is greater than 75 you are eligible for exam
if(Input3>=75){
      console.log("Your are eligible to appear for an exam");
    }
else{                                                                   // else input is less than 75 you are not eligible for exam
        console.log("you are not eligbile to appear for an exam.");
    }
var Input4=prompt("enter age for a senior citizen discount.");
if(Input4>=60){                                                               // if input is greater than 60 you are eligible for senior citizen discount.
      console.log("Your are eligible for a senior citizen discount.");
    }
else{                                                                                 // else input is less than 60 you are  not eligible for senior citizen discount.
        console.log("you are not eligbile for a senior citizen discount.");
    }
