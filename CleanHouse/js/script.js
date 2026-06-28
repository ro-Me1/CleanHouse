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

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

const filter = button.dataset.filter;

document.querySelectorAll(".gallery-item")
.forEach(item => {

if(filter === "all"){

item.parentElement.style.display = "block";

}

else{

if(item.dataset.category === filter){

item.parentElement.style.display = "block";

}

else{

item.parentElement.style.display = "none";

}

}

});

});

});

const darkModeBtn = document.getElementById("darkModeBtn");

console.log(darkModeBtn);

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        console.log("Button clicked!");
         alert("Dark mode button works!");
        document.body.classList.toggle("dark-mode");

    });

}