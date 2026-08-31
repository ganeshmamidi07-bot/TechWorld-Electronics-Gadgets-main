document.addEventListener("DOMContentLoaded", loadOrders);

function loadOrders() {

    const ordersContainer = document.getElementById("ordersContainer");

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    ordersContainer.innerHTML = "";

    if (orders.length === 0) {

        ordersContainer.innerHTML = `
        <div class="empty-cart">
            <i class="fa-solid fa-box-open"></i>
            <h2>No Orders Found</h2>
            <a href="products.html" class="checkout-btn">
                Shop Now
            </a>
        </div>
        `;

        return;
    }

    orders.reverse().forEach(order => {

        let itemsHTML = "";

        order.items.forEach(item => {
            itemsHTML += `
            <p>
                ${item.name} × ${item.quantity}
                - ₹${(item.price * item.quantity).toLocaleString()}
            </p>
            `;
        });

        ordersContainer.innerHTML += `
        <div class="cart-summary">

            <h2>Order #${order.id}</h2>

            <p><strong>Date:</strong> ${order.date}</p>

            <p><strong>Name:</strong> ${order.customer.name}</p>

            <p><strong>Payment:</strong> ${order.customer.payment}</p>

            <p><strong>Status:</strong>
            <span style="color:green;">
            ${order.status}
            </span></p>

            <hr><br>

            ${itemsHTML}

            <hr>

            <h3>
            Total :
            ₹${order.total.toLocaleString()}
            </h3>

        </div>

        <br>
        `;
    });

}