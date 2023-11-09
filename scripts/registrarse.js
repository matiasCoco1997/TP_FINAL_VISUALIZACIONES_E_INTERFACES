
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
            hasError = true;
        } else {
            nombreInput.removeClass("error");
            $("#nombre-error").hide();
        }

        if (dniInput.val().trim() === "") {
            dniInput.addClass("error");
            $("#dni-error").show();
            hasError = true;
        } else {
            dniInput.removeClass("error");
            $("#dni-error").hide();
        }

        if (emailInput.val().trim() === "") {
            emailInput.addClass("error");
            $("#email-error").show();
            hasError = true;
        } else {
            emailInput.removeClass("error");
            $("#email-error").hide();
        }

        if (passwordInput.val().trim() === "") {
            passwordInput.addClass("error");
            $("#password-error").show();
            hasError = true;
        } else {
            passwordInput.removeClass("error");
            $("#password-error").hide();
        }

        if (hasError) {
            event.preventDefault();
        } else{
            $(location).attr('href', "./inciar_sesion.html");
        }

    });
});




