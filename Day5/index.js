function movie(){
    var obj={
        hero_name:"NTR",
        movie_name:"StudentNo1",
        director_name:"Rajamouli",
        plot:"Aditya, a convict attending law college with special permission, overcomes personal and societal challenges to reform unruly students and reconcile with his estranged father."

    }
    console.log(obj);
}
movie()


let i = 0;
while (i <= 10) { // Method 1
    console.log(i);
    i++;
}

i = 0;
while (!(i > 10)) { // Method 2
    console.log(i);
    i++;
}

// To print 10-1
i = 10;
while (i > 0) { // Method 1
    console.log(i);
    i--;
}

i = 10;
while (!(i <= 0)) { // Method 2
    console.log(i);
    i--;
}

// To print -1 to -10
i = -1;
while (!(i < -10)) { // Method 1
    console.log(i);
    i--;
}

i = -1;
while (i >= -10) { // Method 2
    console.log(i);
    i--;
}

// To print -10 to -1
i = -10;
while (i <= -1) 
{ // Method 1
    console.log(i);
    i++;
}

i = -10;
while (!(i > -1)) { // Method 2
    console.log(i);
    i++;
}


const userInput = parseInt(prompt("Enter a positive integer: "));
let evenSum = 0;
let oddSum = 0;

let num = 1;
while (num <= userInput) {
    if (num % 2 === 0) {
        console.log("Even: " + num);
        evenSum += num;
    } else {
        console.log("Odd: " + num);
        oddSum += num;
    }
    num++;
}

console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);
