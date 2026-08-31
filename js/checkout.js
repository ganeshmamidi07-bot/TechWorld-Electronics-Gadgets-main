document.addEventListener("DOMContentLoaded", () => {
    loadCheckout();
    document
        .getElementById("checkoutForm")
        .addEventListener("submit", placeOrder);
});

// Load Checkout Items
function loadCheckout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutTotal = document.getElementById("checkoutTotal");

    checkoutItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
        checkoutTotal.innerText = "₹0";
        return;
    }

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        checkoutItems.innerHTML += `
        <div class="order-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${itemTotal.toLocaleString()}</span>
        </div>
        `;
    });

    checkoutTotal.innerText = "₹" + total.toLocaleString();
}

// Place Order
function placeOrder(e) {

    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const order = {
        id: Date.now(),
        customer: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            payment: document.getElementById("payment").value
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        date: new Date().toLocaleString(),
        status: "Order Placed"
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("🎉 Order placed successfully!");

    window.location.href = "orders.html";
}