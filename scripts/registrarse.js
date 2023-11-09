
$(document).ready(function() {

    const nombreInput = $("#nombre");
    const dniInput = $("#dni");
    const emailInput = $("#email");
    const passwordInput = $("#password");
    const form = $(".loginContainerForm");

    form.submit(function(event) {
        event.preventDefault();

        let hasError = false;

        if (nombreInput.val().trim() === "") {
            nombreInput.addClass("error");
            $("#nombre-error").show();
            $("#nombreContainer").addClass("errorInput");
            hasError = true;
        } else {
            nombreInput.removeClass("error");
            $("#nombre-error").hide();
            $("#nombreContainer").removeClass("errorInput");
        }

        if (dniInput.val().trim() === "") {
            dniInput.addClass("error");
            $("#dni-error").show();
            $("#dniContainer").addClass("errorInput");
            hasError = true;
        } else {
            dniInput.removeClass("error");
            $("#dni-error").hide();
            $("#dniContainer").removeClass("errorInput");
        }

        if (emailInput.val().trim() === "") {
            emailInput.addClass("error");
            $("#email-error").show();
            $("#emailContainer").addClass("errorInput");
            hasError = true;
        } else {
            emailInput.removeClass("error");
            $("#email-error").hide();
            $("#emailContainer").removeClass("errorInput");
        }

        if (passwordInput.val().trim() === "") {
            passwordInput.addClass("error");
            $("#password-error").show();
            $("#passwordContainer").addClass("errorInput");
            hasError = true;
        } else {
            passwordInput.removeClass("error");
            $("#password-error").hide();
            $("#passwordContainer").removeClass("errorInput");
        }

        if (hasError) {
            event.preventDefault();
        } else{
            $(location).attr('href', "./inciar_sesion.html");
        }

    });
});




