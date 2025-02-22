function closeUserInfo() {
    document.getElementById("user-info").style.display = "none";
}

function logout() {
    localStorage.removeItem("userLoggedIn");
    alert("Logged Out Successfully!");
    window.location.href = "login.html"; // Redirect to login page
}



function generateApiKey() {
    let apiKey = "API-" + Math.random().toString(36).substr(2, 15);
    alert("Your API Key: " + apiKey);
}

function resetPassword() {
    let currentPassword = prompt("Enter your current password:");
    
    // Dummy stored password (Replace with backend verification)
    let storedPassword = localStorage.getItem("userPassword") || "1234"; 
    
    if (currentPassword === storedPassword) {
        let newPassword = prompt("Enter your new password:");
        
        if (newPassword.length < 4) {
            alert("Password must be at least 4 characters long!");
            return;
        }

        localStorage.setItem("userPassword", newPassword);
        alert("Password reset successfully!");
    } else {
        alert("Incorrect current password!");
    }
}

function openUserInfo() {
    document.getElementById("user-info").style.display = "block";
}


function closeUserInfo() {
    document.getElementById("user-info").style.display = "none";
}

function logoutUser() {
    localStorage.removeItem("userLoggedIn");
    window.location.href = "/login.html";
}


// New Order submit 




document.querySelector(".submit-btn").addEventListener("click", function() {
    let user = "John Doe"; // Replace with actual user
    let service = document.querySelector("select").value;
    let amount = 100; // Calculate based on selection
    let link = document.querySelector("input[placeholder='Enter Video Link']").value;
    let quantity = document.querySelector("input[type='number']").value;

    fetch("place_order.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `user=${user}&service=${service}&amount=${amount}&link=${link}&quantity=${quantity}`
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error:", error));
});




