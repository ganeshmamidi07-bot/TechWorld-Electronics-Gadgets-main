// Featured Products on Home Page

document.addEventListener("DOMContentLoaded", () => {
    displayFeaturedProducts();
    updateCartCount();
});

// Display first 8 products
function displayFeaturedProducts() {
    const container = document.getElementById("featuredProducts");

    if (!container) return;

    container.innerHTML = "";

    const featured = products.slice(0, 8);

    featured.forEach(product => {
        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price.toLocaleString()}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
        `;
    });
}

// Add product to cart
function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");
}

// Update cart count
function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    const cartLink = document.querySelector('a[href="cart.html"]');

    if (cartLink) {
        cartLink.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        Cart (${count})
        `;
    }
}
// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}