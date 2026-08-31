document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("accountForm");

const user = JSON.parse(localStorage.getItem("user"));

if(user){

document.getElementById("fullName").value=user.fullName;
document.getElementById("email").value=user.email;
document.getElementById("phone").value=user.phone;
document.getElementById("address").value=user.address;

}

form.addEventListener("submit",saveProfile);

});

function saveProfile(e){

e.preventDefault();

const user={

fullName:document.getElementById("fullName").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

address:document.getElementById("address").value

};

localStorage.setItem("user",JSON.stringify(user));

alert("Profile saved successfully!");

}