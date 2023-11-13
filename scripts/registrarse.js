
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
            $("#nombreContainer").addClass("errorBorderBottom");
            hasError = true;
        } else {
            nombreInput.removeClass("error");
            $("#nombreContainer").removeClass("errorBorderBottom");
        }

        if (dniInput.val().trim() === "") {
            dniInput.addClass("error");
            $("#dniContainer").addClass("errorBorderBottom");
            hasError = true;
        } else {
            dniInput.removeClass("error");
            $("#dniContainer").removeClass("errorBorderBottom");
        }

        if (emailInput.val().trim() === "") {
            emailInput.addClass("error");
            $("#emailContainer").addClass("errorBorderBottom");
            hasError = true;
        } else {
            emailInput.removeClass("error");
            $("#emailContainer").removeClass("errorBorderBottom");
        }

        if (passwordInput.val().trim() === "") {
            passwordInput.addClass("error");
            $("#passwordContainer").addClass("errorBorderBottom");
            hasError = true;
        } else {
            passwordInput.removeClass("error");
            $("#passwordContainer").removeClass("errorBorderBottom");
        }

        if (hasError) {
            $("#campos-error").show();
            $("#campos-error").addClass("errorInput");
            event.preventDefault();
            
        } else{
            $("#campos-error").hide();
            $("#campos-error").removeClass("errorInput");
            $(location).attr('href', "./inciar_sesion.html");
        }

    });
});




