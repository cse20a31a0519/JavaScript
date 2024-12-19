const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit); // [32, 68, 86, 104]

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  const names = users.map(user => user.name);
  console.log(names); // ['Alice', 'Bob', 'Charlie']

  const dates = ['2024-12-19', '2024-12-20', '2024-12-21'];
  const formattedDates = dates.map(date => new Date(date).toLocaleDateString());
  console.log(formattedDates); // ['12/19/2024', '12/20/2024', '12/21/2024']

  const number = [1, 2, 3, 4];
  const squares = number.map(num => num * num);
  console.log(squares); // [1, 4, 9, 16]


  const number1 = [1, 2, 3, 4];
  const cube = number.map(num => num * num*num);
  console.log(cube); //[1,8,27,64]

  const words = ['apple', 'banana', 'cherry'];
  const uppercasedWords = words.map(word => word.toUpperCase());
  console.log(uppercasedWords); // ['APPLE', 'BANANA', 'CHERRY']

  const user1 = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
  ];

  const activeUsers = users.filter(user => user.active);
  console.log(activeUsers); // [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]

  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  const affordableProducts = products.filter(product => product.price <= 600);
  console.log(affordableProducts); // [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 300 }]
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers); // [2, 4, 6]

  const tasks = [
    { task: 'Do laundry', completed: true },
    { task: 'Buy groceries', completed: false },
    { task: 'Clean house', completed: true }
  ];
  const completedTasks = tasks.filter(task => task.completed);
  console.log(completedTasks); // [{ task: 'Do laundry', completed: true }, { task: 'Clean house', completed: true }]
  const strings = ['apple', '', 'banana', 'cherry', ''];
  const nonEmptyStrings = strings.filter(str => str !== '');
  console.log(nonEmptyStrings); // ['apple', 'banana', 'cherry']

//forEach()
  const items = ['apple', 'banana', 'cherry'];
  items.forEach(item => console.log(item));


  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    item.textContent = 'Updated Item';
  });


  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  });


  const apiResponse = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  apiResponse.forEach(user => {
    console.log(`User ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
  });

  const cart = [
    { item: 'Laptop', quantity: 2 },
    { item: 'Phone', quantity: 3 },
    { item: 'Tablet', quantity: 1 }
  ];
  cart.forEach(item => {
    item.quantity += 1; // Increase each item quantity by 1
  });
  console.log(cart); 

  