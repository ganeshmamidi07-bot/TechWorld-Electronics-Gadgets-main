document.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

const user=
JSON.parse(localStorage.getItem("registeredUser"));

if(user &&
user.email===email &&
user.password===password){

alert("Login Successful!");

window.location.href="account.html";

}else{

alert("Invalid Email or Password");

}

});