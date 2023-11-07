
document.addEventListener("DOMContentLoaded", function() {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const form = document.querySelector(".loginContainerForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let hasError = false;
        
        console.log('hola')

        if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        document.getElementById("email-error").style.display = "block";
        hasError = true;
        } else {
        emailInput.classList.remove("error");
        document.getElementById("email-error").style.display = "none"; 
        }
    
        if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("error");
        document.getElementById("password-error").style.display = "block"; 
        hasError = true;
        } else {
        passwordInput.classList.remove("error");
        document.getElementById("password-error").style.display = "none";
        }
    
        if (hasError) {
        event.preventDefault();
        }
    });
});




