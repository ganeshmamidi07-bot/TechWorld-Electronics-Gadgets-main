document.addEventListener("DOMContentLoaded", displayWishlist);

function displayWishlist(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

container.innerHTML = "";

if(wishlist.length===0){

container.innerHTML=`
<div class="empty-cart">

<i class="fa-solid fa-heart"></i>

<h2>Your Wishlist is Empty</h2>

<a href="products.html" class="checkout-btn">
Browse Products
</a>

</div>
`;

return;

}

wishlist.forEach((product,index)=>{

container.innerHTML+=`

<div class="cart-item">

<img src="${product.image}" alt="${product.name}">

<div class="cart-details">

<h3>${product.name}</h3>

<p>₹${product.price.toLocaleString()}</p>

</div>

<div>

<button class="checkout-btn"
onclick="moveToCart(${index})">

Move To Cart

</button>

<br><br>

<button class="remove-btn"
onclick="removeWishlist(${index})">

Remove

</button>

</div>

</div>

`;

});

}

function moveToCart(index){

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const product = wishlist[index];

const existing =
cart.find(item=>item.id===product.id);

if(existing){

existing.quantity++;

}else{

cart.push({

...product,

quantity:1

});

}

wishlist.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

localStorage.setItem("wishlist",JSON.stringify(wishlist));

displayWishlist();

alert("Product moved to cart.");

}

function removeWishlist(index){

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.splice(index,1);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

displayWishlist();

}