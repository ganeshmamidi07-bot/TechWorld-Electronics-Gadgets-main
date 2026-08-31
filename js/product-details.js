const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

if(product){

document.getElementById("productImage").src = product.image;

document.getElementById("productName").innerText = product.name;

document.getElementById("productPrice").innerText =
"₹" + product.price.toLocaleString();

document.getElementById("productBrand").innerText =
"Brand : " + product.brand;

document.getElementById("productCategory").innerText =
"Category : " + product.category;

document.getElementById("productStock").innerText =
product.stock ? "In Stock" : "Out of Stock";

}

document.getElementById("addCartBtn").onclick=function(){

addToCart(product.id);

}

document.getElementById("wishlistBtn").onclick=function(){

addToWishlist(product.id);

}