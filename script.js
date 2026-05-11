const menu = [
  {
    name: "Veg Dum Special Biriyani",
    price: 129
  },
  {
    name: "Chicken Fried Rice",
    price: 129
  },
  {
    name: "Butter Paneer",
    price: 199
  },
  {
    name: "Chicken 65",
    price: 159
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
      <h2 class="text-xl text-yellow-400 mb-2">${item.name}</h2>
      <p class="mb-4">₹${item.price}</p>

      <button onclick="addToCart(${index})"
      class="bg-yellow-400 text-black px-4 py-2 rounded-xl">
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

}