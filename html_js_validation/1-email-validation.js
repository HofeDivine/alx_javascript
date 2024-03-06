function validateEmail() {
    var Email = document.getElementById("email").value;
    var Error = document.getElementById("error");
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);

    
if(validEmail){
    Error.textContent = "";
    return true;

}
else {
    Error.textContent ="Please enter a valid email address.";
    return false;
}

}
document.getElementById("emailForm").onsubmit = function(event){
    if(!validateEmail()){
        event.preventDefault();
    }
}