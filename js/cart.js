// Load cart when page opens
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

// Display Cart Items
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const container = document.getElementById("cartContainer");

    const subtotal = document.getElementById("subtotal");
    const grandTotal = document.getElementById("grandTotal");

    container.innerHTML = "";

    if (cart.length === 0) {

        container.innerHTML = `
        <div class="empty-cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <h2>Your Cart is Empty</h2>
            <br>
            <a href="products.html" class="checkout-btn">
                Continue Shopping
            </a>
        </div>
        `;

        subtotal.innerText = "₹0";
        grandTotal.innerText = "₹0";
        return;
    }

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price * product.quantity;

        container.innerHTML += `
        <div class="cart-item">

            <img src="${product.image}" alt="${product.name}">

            <div class="cart-details">

                <h3>${product.name}</h3>

                <p>₹${product.price.toLocaleString()}</p>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">−</button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>

                </div>

            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">

            Remove

            </button>

        </div>
        `;

    });

    subtotal.innerText = "₹" + total.toLocaleString();
    grandTotal.innerText = "₹" + total.toLocaleString();
}

// Increase Quantity
function increaseQuantity(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

// Decrease Quantity
function decreaseQuantity(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

// Remove Item
function removeItem(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}