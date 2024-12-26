let data = [
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          }
        },
        {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259
          }
        },
        {
          "id": 3,
          "title": "White Gold Plated Princess",
          "price": 9.99,
          "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 3,
            "count": 400
          }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "rating": {
              "rate": 2.1,
              "count": 430
            }
          },
          {
            "id": 5,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            "rating": {
              "rate": 3.6,
              "count": 145
            }
          },
          {
            "id": 6,
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            "price": 56.99,
            "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            "rating": {
              "rate": 2.6,
              "count": 235
            }
          },
        {
          "id": 7,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 130
          }
        },
        {
          "id": 8,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.5,
            "count": 146
          }
        },
      ]
  
  let pro = document.getElementById("product");
  
  data.forEach((item) => {
    let card = document.createElement("div");
    card.style.border = "2px solid black";
    card.style.margin = "10px";
    card.style.padding = "20px";
    card.style.width = "300px";
    card.style.cursor="pointer"
    card.addEventListener("click", ()=>{
        card.style.boxShadow="5px 5px 1px blue"
    setTimeout(()=> {
        card.style.boxShadow = "0px 0px 0px white";
    }, 3000);
});
  
    // Create and append the image
    let imgs = document.createElement("img");
    imgs.src = item.image;
    imgs.style.width = "40%";
    card.appendChild(imgs);
  
    // Create and append the title
    let tit = document.createElement("h4");
    tit.innerText = item.title;
    card.appendChild(tit);

    let pr=document.createElement("p")
    pr.innerHTML=item.price;
    pr.style.color="red";
    card.appendChild(pr);

    let cat=document.createElement("p")
    cat.innerHTML=item.category;
    cat.style.color="green";
    card.appendChild(cat);

    let rat1=document.createElement("p")
    rat1.innerText=item.rating.rate
    card.appendChild(rat1)

    let rat2=document.createElement("p")
    rat2.innerText=item.rating.count
    card.appendChild(rat2)

    pro.style.display="flex"
    pro.style.flexWrap="wrap"
    pro.appendChild(card);
  });

