
var  person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName); 
person.city = "New York";
console.log(person);

var product = {
    name: "Laptop",
    price: 1200,
    inStock: true
};
product.price = 1000;
delete product.inStock;
console.log(product);
var library = {
    fantasy: {
        books: ["Harry Potter", "The Hobbit"]
    },
    mystery: {
        books: ["Sherlock Holmes", "Gone Girl"]
    }
};
library.scienceFiction = {
    books: ["Dune", "Ender's Game"]
};
console.log(library.fantasy.books[0]); 
delete library.mystery;
console.log(library);

var user = {
    username: "johndoe",
    email: "john.doe@example.com",
    address: {
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};
Object.freeze(user);
user.email = "new.email@example.com"; // This won't work because the object is frozen
console.log(Object.isFrozen(user)); 
user.phone = "123-456-7890"; // This won't work because the object is frozen
console.log(user);
var car = {
    make: "Toyota",
    model: "Camry",
    price: 25000
};
Object.seal(car);
delete car.make; // This won't work because the object is sealed
console.log(Object.isSealed(car)); 
car.price = 24000;
console.log(car.price); 
console.log(Object.isExtensible(car)); 

