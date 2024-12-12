var str1 = "  hello";
var str2 = "world   ";
var combined = str1.trim() + str2.trim();
var result = combined.toUpperCase();
console.log(result); 


var str = "STRINGMETHODSWITHDIFFERENTEXAMPLES";
var middle = str.slice(Math.floor(str.length / 4), Math.ceil((3 * str.length) / 4));
var lastIndex = middle.lastIndexOf('E');
var lowerMiddle = middle.toLowerCase();

console.log(middle);       
console.log(lastIndex);    
console.log(lowerMiddle);  

var singleChar = 'A';
var str = "hello";
var concatResult = (singleChar + str).toUpperCase();
var secondLastChar = concatResult[concatResult.length - 2];
console.log(concatResult);  
console.log(secondLastChar); 

var str1 = "programming";
var str2 = "languages";
var extracted = str1.slice(0, 3) + str2.slice(-3);
var finalResult = extracted[0].toUpperCase() +  extracted.slice(1, -1) + extracted[extracted.length - 1].toUpperCase();

console.log(finalResult); 

var str = "   hello world   ";
var anotherStr = "JavaScript";
var trimmed = str.trim();
var modifiedStr = trimmed[0].toUpperCase() + trimmed.slice(1, -1) + trimmed[trimmed.length - 1].toUpperCase();
var extractedPart = trimmed.slice(0, 5);
var concatenatedResult = extractedPart + anotherStr;
console.log(concatenatedResult); 


var sentence = "hello there , how are you";
var index = sentence.indexOf("are");
console.log(index); 
