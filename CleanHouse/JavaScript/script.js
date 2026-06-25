const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){

alert("Please fill all required fields.");

return;

}

alert("Form submitted successfully!");

});

}