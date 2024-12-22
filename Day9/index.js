// Updating 'dv' container
let cont = document.getElementById("dv");
cont.innerHTML = `
    <img src="https://ae01.alicdn.com/kf/HTB1KiBraZfrK1Rjy0Fmq6xhEXXaU/Summer-white-shoes-Korean-feather-shoes-casual-tie-men-s-single-shoes-fashion-black-and-white.jpg" width="300px" />
    <h2>Feather Shoes</h2>
    <p>Men's Shoes</p>
    <div>
        <p>Price: 230rs</p>
        <button Style='color:Red'>Add to Cart</button>
    </div>
`;

// Styling 'dv' content programmatically
let dvImage = cont.querySelector("img");
dvImage.style.borderRadius = "10px";

let dvHeading = cont.querySelector("h2");
dvHeading.style.color = "black";

let dvParagraph = cont.querySelector("p");
dvParagraph.style.fontSize = "16px";

// Updating 'm' container
let sec = document.getElementById("m");
sec.style.marginTop = "50px";
sec.innerHTML = `
    <img src="https://tse2.mm.bing.net/th?id=OIP.q5dJ-ACu4bbskH6mZs7O4QAAAA&pid=Api&P=0&h=180" width="300px" />
    <h2>Brown Sneakars</h2>
    <p>women's Shoes</p>
    <p>Price: 300rs</p>
    <button>Add to Cart</button>
`;

// Styling 'm' content programmatically
let mImage = sec.querySelector("img");
mImage.style.borderRadius = "10px";

let mHeading = sec.querySelector("h2");
mHeading.style.color = "brown";

let mParagraph = sec.querySelector("p");
mParagraph.style.fontSize = "16px";

// Working with an array of objects
let data = [
    { id: 1, name: "Deepika", course: "CSE" },
    { id: 2, name: "Sai", course: "ECE" },
    { id: 3, name: "Venkat", course: "EEE" },
    { id: 4, name: "Reddy", course: "Mech" }
];
console.log(data);

let colors = ["#f8d7da", "#d1ecf1", "#d4edda", "#fff3cd"];

// Creating cards for each object in 'data'
let cardContainer = document.getElementById("ob");
data.forEach((item, i) => {
    let card = document.createElement("div");

    // Applying styles line by line
    card.style.width = "350px";
    card.style.border = "2px solid black";
    card.style.backgroundColor = colors[i % colors.length];
    card.style.margin = "10px";
    card.style.padding = "15px";
    card.style.borderRadius = "5px";

    // Adding content to the card
    card.innerHTML = `
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Course:</strong> ${item.course}</p>
    `;

    // Append card to the container
    cardContainer.appendChild(card);
});
