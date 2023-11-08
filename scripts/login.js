
document.addEventListener("DOMContentLoaded", function() {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("password-email-error");

    const form = document.querySelector(".loginContainerForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = false


        if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        document.getElementById("email-error").style.display = "block";
        hasError = true;
        } else {
        email = true
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

        if (passwordInput.value.trim() !== "1234") {
        passwordInput.classList.add("error");
        errorMessage.style.display = "block";
        hasError = true;
        } else {
        passwordInput.classList.remove("error");
        errorMessage.style.display = "none";
        }

        if  (email) {
        document.querySelector(".loading").style.display = "flex";
        setTimeout(function() {
            document.querySelector(".loading").style.display = "none";
            }, 2000)
        }

    });
});




