const menu = [

  {
    name:"Chicken Fried Rice",
    price:129
  },

  {
    name:"Butter Paneer",
    price:199
  },

  {
    name:"Chicken 65",
    price:159
  }

];

let cart = [];

const menuContainer =
document.getElementById("menu-container");

menu.forEach((item,index)=>{

  menuContainer.innerHTML += `

    <div class="card">

      <h3>${item.name}</h3>

      <p>₹${item.price}</p>

      <button onclick="addToCart(${index})">

      Add To Cart

      </button>

    </div>

  `;

});

function addToCart(index){

  const existing =
  cart.find(c=>c.name===menu[index].name);

  if(existing){

    existing.qty += 1;

  } else {

    cart.push({
      ...menu[index],
      qty:1
    });

  }

  updateCart();
}

function updateCart(){

  const cartItems =
  document.getElementById("cart-items");

  const totalPrice =
  document.getElementById("total-price");

  const cartCount =
  document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item)=>{

    total += item.price * item.qty;

    count += item.qty;

    cartItems.innerHTML += `

      <div class="cart-item">

        <h4>${item.name}</h4>

        <p>
        ₹${item.price} × ${item.qty}
        </p>

      </div>

    `;

  });

  totalPrice.innerText = total;

  cartCount.innerText = count;
}

function toggleCart(){

  const panel =
  document.getElementById("cart-panel");

  if(panel.style.right==="0px"){

    panel.style.right="-100%";

  } else {

    panel.style.right="0px";

  }

}
