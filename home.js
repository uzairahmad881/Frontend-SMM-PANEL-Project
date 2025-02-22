// Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navMenu = document.querySelector(".nav");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle('active'); // Corrected toggle method
};


// 

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality is not implemented yet.");
});


// Faq Question

function toggleFAQ(element) {
    var answer = element.nextElementSibling;
    var icon = element.querySelector(".faq-icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "−";
    }
}

// button click

function buttonClick() {
    let button = document.querySelector('.smm-button');
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 150);
    alert("🚀 Redirecting to SMM Panel...");
}

// login to dashbaord

function toggleMenu() {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy login check (Replace with backend validation)
    if (username === "admin" && password === "1234") {
        localStorage.setItem("userLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid Username or Password");
    }
});


