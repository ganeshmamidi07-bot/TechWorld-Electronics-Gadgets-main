// Load all products when page opens
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    updateCartCount();
});

// Display Products
function displayProducts(productList) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    if(productList.length === 0){
        container.innerHTML = "<h2>No products found.</h2>";
        return;
    }

    productList.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

          <a href="product-details.html?id=${product.id}">
<img src="${product.image}" alt="${product.name}">
</a>

<h3>
<a href="product-details.html?id=${product.id}">
${product.name}
</a>
</h3>  

            <p>₹${product.price.toLocaleString()}</p>

            <small>
                Brand: ${product.brand}<br>
                Category: ${product.category}
            </small>

            <div class="buttons">

                <button
                class="cart-btn"
                onclick="addToCart(${product.id})">

                <i class="fa-solid fa-cart-shopping"></i>

                Cart

                </button>

                <button
                class="wishlist-btn"
                onclick="addToWishlist(${product.id})">

                ❤ Wishlist

                </button>

            </div>

        </div>

        `;

    });

}

// Search Products
function searchProducts(){

    const text =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const filtered =
    products.filter(product =>
        product.name.toLowerCase().includes(text)
    );

    displayProducts(filtered);

}

// Category Filter
function filterProducts(){

    const category =
    document.getElementById("categoryFilter").value;

    if(category==="All"){
        displayProducts(products);
        return;
    }

    const filtered =
    products.filter(product =>
        product.category===category
    );

    displayProducts(filtered);

}

// Add To Cart
function addToCart(id){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const product =
    products.find(p=>p.id===id);

    const existing =
    cart.find(item=>item.id===id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(product.name + " added to cart.");

}

// Add To Wishlist
function addToWishlist(id){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    const product =
    products.find(p=>p.id===id);

    const exists =
    wishlist.find(item=>item.id===id);

    if(exists){

        alert("Product already in wishlist.");

        return;

    }

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(product.name + " added to wishlist.");

}

// Update Cart Count
function updateCartCount(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item=>{

        total += item.quantity;

    });

    const cartLink =
    document.querySelector('a[href="cart.html"]');

    if(cartLink){

        cartLink.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        Cart (${total})
        `;

    }

}