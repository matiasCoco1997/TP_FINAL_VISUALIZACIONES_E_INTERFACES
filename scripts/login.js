$(document).ready(function() {

    const emailInput = $("#email");
    const passwordInput = $("#password");
    const errorMessage = $("#campos-error");

    var email = "usuario@gmail.com";

    const form = $(".loginContainerForm");



    form.on("submit", function (event) {
        
        event.preventDefault();

        let hasError = false;

        if(emailInput.val().trim() !== email ){
            hasError = true;
            errorMessage.css("display", "block");
        } else{
            hasError = false;
            errorMessage.css("display", "none");
        }

        if (passwordInput.val().trim() !== "1234") {
            hasError = true;
            errorMessage.css("display", "block");
        } else {
            hasError = false;
            errorMessage.css("display", "none");
        }


        if (!hasError) {
            errorMessage.hide();
            errorMessage.removeClass("error-message");
            
            $(".loading").css("display", "flex");
            setTimeout(function () {
                $(".loading").css("display", "none");
            }, 2000);

            $(location).attr('href', "./home.html");
        } else {
            errorMessage.show();
            $("#campos-error").addClass("error-message");
        }

    });
});