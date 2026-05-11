const menu = [
  {
    name: "Veg Dum Special Biriyani",
    price: 129
  },
  {
    name: "Paneer Fried Rice",
    price: 139
  },
  {
    name: "Chicken Fried Rice",
    price: 129
  },
  {
    name: "Chicken 65",
    price: 159
  },
  {
    name: "Butter Paneer",
    price: 199
  },
  {
    name: "Prawn Masala",
    price: 279
  }
];

let cart = [];

const menuContainer = document.getElementById("menu-container");

menu.forEach((item, index) => {
  menuContainer.innerHTML += `
    <div class="card">
      <h2 class="food-name">${item.name}</h2>
      <p class="food-price">₹${item.price}</p>

      <button class="add-btn" onclick="addToCart(${index})">
        Add To Cart
      </button>
    </div>
  `;
});

function addToCart(index) {

  const existing = cart.find(c => c.name === menu[index].name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...menu[index],
      qty: 1
    });
  }

  updateCart();
}

function updateCart() {

  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {

    total += item.price * item.qty;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>₹${item.price} × ${item.qty}</p>

        <button class="remove-btn" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  });

}      </button>
    </div>
  `;
});

function addToCart(index) {
  const existing = cart.find(c => c.name === menu[index].name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...menu[index],
      qty: 1
    });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    count += item.qty;

}
