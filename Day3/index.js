var myArray = [1, 2, 3, 4, 5];
var length = myArray.length;
console.log(length); 
myArray.push(6);
myArray.pop();
myArray.unshift(0);
myArray.shift();
myArray.reverse();
var index = myArray.indexOf(3);
console.log(index); 
var exists = myArray.includes(4);
console.log(exists);
myArray.sort();
var string = myArray.join(",");
console.log(string);
myArray.push(7);
myArray.shift();
const reversedString = myArray.reverse().join(" ");
myArray.sort();
myArray.pop();
myArray.unshift(8, 9);
myArray.shift();


var newLength = myArray.length;
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
var combinedArray = array1.concat(array2).sort();
combinedArray.pop();

var guests = ["Alice", "Bob", "Charlie", "David"];
guests.unshift("Eve");
guests.pop();
var isBobInList = guests.includes("Bob");
console.log(guests); 


var words = "Learn,Practice,Improve".split(",");
var reversedWords = words.reverse();
var sentence = reversedWords.join(" ");
console.log(sentence); 


var playlist1 = ["Song1", "Song2", "Song3"];
var playlist2 = ["Song4", "Song5"];
var combinedPlaylist = playlist1.concat(playlist2);
combinedPlaylist.shift();
combinedPlaylist.push("Song6");
console.log(combinedPlaylist);


var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
var middleMovies = movies.slice(1, 4);
var combinedMovies = middleMovies.concat(["The Matrix", "The Godfather"]);
var reversedMovies = combinedMovies.reverse();
console.log(reversedMovies); 

var names = "John,Doe,Jane,Smith".split(",");
var isJaneInList = names.includes("Jane");
var reversedNames = names.reverse().join(" ");
console.log(reversedNames); 

var numbers = [1, 2, 3, 4, 5];
numbers.shift();
numbers.push(6, 7);
var finalLength = numbers.length;
console.log(numbers, finalLength); 


var cart = ["Milk", "Bread", "Eggs", "Butter"];
var hasEggs = cart.includes("Eggs");
cart.pop();
cart.push("Cheese", "Juice");
console.log(cart); 

var names1 = ["Alice", "Bob", "Charlie"];
var names2 = ["David", "Eve"];
var reversedNames1 = names1.reverse();
var combinedNames = reversedNames1.concat(names2);
combinedNames.unshift("Frank");
console.log(combinedNames); 

var cart1 = ["Milk", "Bread", "Eggs", "Butter"];
var eggsIndex = cart.indexOf("Eggs");
cart.splice(eggsIndex, 1, "Cheese");
cart.unshift("Juice");
console.log(cart); 