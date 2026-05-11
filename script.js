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

  totalPrice.innerText = total;
  cartCount.innerText = count;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {

  const panel = document.getElementById("cart-panel");

  if (panel.style.right === "0px") {
    panel.style.right = "-100%";
  } else {
    panel.style.right = "0px";
  }
}

function payNow() {

  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const address = document.getElementById("customer-address").value;

  if (!name || !phone || !address) {
    alert("Please fill all details");
    return;
  }

  const total = document.getElementById("total-price").innerText;

  const upiLink = `upi://pay?pa=8249577736@ybl&pn=NextGenKitchen&am=${total}&cu=INR`;

  window.location.href = upiLink;

  let orderText = `New Order%0A%0A`;

  orderText += `Name: ${name}%0A`;
  orderText += `Phone: ${phone}%0A`;
  orderText += `Address: ${address}%0A%0A`;

  cart.forEach(item => {
    orderText += `${item.name} x${item.qty}%0A`;
  });

  orderText += `%0ATotal: ₹${total}`;

  setTimeout(() => {
