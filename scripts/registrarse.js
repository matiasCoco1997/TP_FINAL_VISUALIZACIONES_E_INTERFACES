
$(document).ready(function() {
    const emailInput = $("#email");
    const passwordInput = $("#password");

    const form = $(".loginContainerForm");

    form.submit(function(event) {
        event.preventDefault();

        let hasError = false;

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
        }
    });
});




