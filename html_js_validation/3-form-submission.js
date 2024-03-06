document.addEventListener("DOMContentLoaded", function() {
    var submitForm = document.getElementById("submitForm");
    
    submitForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        
        if (!name || !email) {
            displayErrorMessage("Please fill in all required fields.");
        } else {

            displaySuccessMessage("Form submitted successfully!");
        }
    });
    
    function displayErrorMessage(message) {

        var errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = "red";
    }
    
    function displaySuccessMessage(message) {
        var successMessageElement = document.getElementById("successMessage");
        successMessageElement.textContent = message;
        successMessageElement.style.color = "green";
    }
});
