document.getElementById("registerForm")
.addEventListener("submit",function(e){

e.preventDefault();

const user={

name:document.getElementById("regName").value,

email:document.getElementById("regEmail").value,

password:document.getElementById("regPassword").value

};

localStorage.setItem("registeredUser",JSON.stringify(user));

alert("Registration Successful!");

window.location.href="login.html";

});