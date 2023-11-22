
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
            $("#usuarioIcon").addClass("errorIcon");
            hasError = true;
        } else {
            nombreInput.removeClass("error");
            $("#nombreContainer").removeClass("errorBorderBottom");
            $("#usuarioIcon").removeClass("errorIcon");
        }

        if (dniInput.val().trim() === "") {
            dniInput.addClass("error");
            $("#dniContainer").addClass("errorBorderBottom");
            $("#dniIcon").addClass("errorIcon");
            hasError = true;
        } else {
            dniInput.removeClass("error");
            $("#dniContainer").removeClass("errorBorderBottom");
            $("#dniIcon").removeClass("errorIcon");
        }

        if (emailInput.val().trim() === "") {
            emailInput.addClass("error");
            $("#emailContainer").addClass("errorBorderBottom");
            $("#emailIcon").addClass("errorIcon");
            hasError = true;
        } else {
            emailInput.removeClass("error");
            $("#emailIcon").removeClass("errorIcon");
            $("#emailContainer").removeClass("errorBorderBottom");
        }

        if (passwordInput.val().trim() === "") {
            passwordInput.addClass("error");
            $("#keyIcon").addClass("errorIcon");
            $("#passwordContainer").addClass("errorBorderBottom");
            hasError = true;
        } else {
            passwordInput.removeClass("error");
            $("#keyIcon").removeClass("errorIcon");
            $("#passwordContainer").removeClass("errorBorderBottom");
        }

        if (hasError) {
            $("#campos-error").show();
            $("#campos-error").addClass("errorInput");
            event.preventDefault();
            
        } else{
            $("#campos-error").hide();
            $("#campos-error").removeClass("errorInput");
            $("#overlay").show();
            $("#popup").show();
            
        }
    });

    document.getElementById("btn_redireccion").addEventListener("click", function(){
        ocultarPopup();
    })

    function ocultarPopup() {
        $(".overlay").hide();
        $(".popup").hide();
        $(location).attr('href', "./home.html");
    }

});






