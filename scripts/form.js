document.addEventListener('DOMContentLoaded', function () {
    var pasoActual = 1;
    var succesBTN = document.querySelector('.btn-success')
    var dangerBTN =   document.querySelector('.btn-danger')

    succesBTN.addEventListener('click', function () {
        if (pasoActual === 1) {
            dangerBTN.style.display="flex"
            var progressBar = document.querySelector(".progress-bar")
            progressBar.style.width = "50%"
            document.querySelector('.formContainer').style.display = 'none';
            document.querySelector('.calendarContainer').style.display = 'flex';
            pasoActual = 2;
        } else if (pasoActual === 2) {
            dangerBTN.style.display="flex"
            var progressBar = document.querySelector(".progress-bar")
            progressBar.style.width = "100%"
            document.querySelector('.calendarContainer').style.display = 'none';
            document.querySelector('.messageContainer').style.display = 'block';
            pasoActual = 3;
            succesBTN.style.display="none"
        } 
    });

    dangerBTN.addEventListener('click', function () {
        if (pasoActual === 2) {
            var progressBar = document.querySelector(".progress-bar")
            progressBar.style.width = "25%"
            document.querySelector('.calendarContainer').style.display = 'none';
            document.querySelector('.formContainer').style.display = 'block';
            pasoActual = 1;
            dangerBTN.style.display="none"
        } else if (pasoActual === 3) {
            succesBTN.style.display="flex"
            var progressBar = document.querySelector(".progress-bar")
            progressBar.style.width = "50%"
            document.querySelector('.messageContainer').style.display = 'none';
            document.querySelector('.calendarContainer').style.display = 'flex';
            pasoActual = 2;
        }
       
    });

    // ... Tu código existente ...

});