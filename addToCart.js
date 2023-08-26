let openShopping = document.querySelector("#new-id");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Fresh Cream Pineapple Cake 1 Kg",
    image: "cake 1.webp",
    price: 1200,
  },
  {
    id: 2,
    name: "Eggless Dutch Truffle Cake",
    image: "cake2.webp",
    price: 550,
  },
  {
    id: 3,
    name: "Eggless Red Velvet Cake",
    image: "cake3.webp",
    price: 600,
  },
  {
    id: 4,
    name: "Eggless After Nine Cake",
    image: "cake4.webp",
    price: 650,
  },
  {
    id: 5,
    name: "Chocoholic Cake",
    image: "cake5.webp",
    price: 700,
  },
  {
    id: 6,
    name: "Cappucino",
    image: "Cappucino1.webp",
    price: 120,
  },
  {
    id: 7,
    name: "Hot Chocolate",
    image: "HotChocolate1.webp",
    price: 150,
  },
  {
    id: 8,
    name: "Classic Mango Juice",
    image: "mangojuice.webp",
    price: 130,
  },
  {
    id: 9,
    name: "Latte",
    image: "Latte1.webp",
    price: 130,
  },
  {
    id: 10,
    name: "Caprese Sandwich",
    image: "capresesandwich.webp",
    price: 200,
  },
  {
    id: 11,
    name: "Chilli Cheese Sandwich",
    image: "cheesechilli.webp",
    price: 150,
  },
  {
    id: 12,
    name: "Chicken Tikka Sandwich",
    image: "ChickenTikkaSandwich.webp",
    price: 240,
  },
  {
    id: 13,
    name: "Almond Rocks 250g",
    image: "AlmondRocks250g.webp",
    price: 430,
  },
  {
    id: 13,
    name: "Almond Rocks 500g",
    image: "AlmondRocks500g1.webp",
    price: 850,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  console.log(key, quantity);
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
