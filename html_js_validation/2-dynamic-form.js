// dynamic-form.js

document.getElementById("dynamicForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        console.log("Form submitted successfully!");
    } else {
        console.log("Please fill in all fields.");
    }
});

document.getElementById("numFields").addEventListener("change", function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});
generateInputFields(parseInt(document.getElementById("numFields").value));

function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; 

    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.name = "field" + i;
        input.placeholder = "Field " + i;
        input.required = true; 
        inputContainer.appendChild(input);
    }
}

function validateForm() {
    var inputs = document.querySelectorAll("#inputContainer input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            return false; 
        }else{
            return true; 
        }
        
    }
    
}
