function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    
    var minLength = 8;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasDigits = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*]/.test(password);

   
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigits && hasSpecialChar) {
        errorElement.textContent = ""; 
        return true; 
    } else {
        errorElement.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*).";
        return false; 
    }
}

document.getElementById("passwordForm").onsubmit = function(event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
};
