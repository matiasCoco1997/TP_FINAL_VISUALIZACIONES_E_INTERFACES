document.addEventListener('DOMContentLoaded', function () {
    var pasoActual = 1;
    var succesBTN = document.querySelector('.btn-siguiente');
    var confirmarBTN = document.querySelector('.btn-confirmar');
    var dangerBTN =   document.querySelector('#volver');


    var camposVacios = false;
    
    var tramiteVacio = false;
    var documentoVacio = false;
    var nombreVacio = false;
    var ApellidoVacio = false;
    var localidadVacia = false;

    

    succesBTN.addEventListener('click', function () {

        var camposVacios = false;

        var inputTipoDeTramite =   document.querySelector('#tipo_tramite').value;
        var inputNumeroDeDocumento =   document.querySelector('#numero_documento').value;
        var inputNombreUsuario =   document.querySelector('#nombre').value;
        var inputApellidoUsuario =   document.querySelector('#apellido').value;
        var inputLocalidad =   document.querySelector('#localidad').value;


        if(inputTipoDeTramite === "0"){
            camposVacios = true;
            document.getElementById("iconoTramite").classList.remove("iconoBlanco");
            document.getElementById("iconoTramite").classList.add("iconoError");
            document.getElementById("campoInputTipoTramite").style.borderBottom = "2px solid #FF9999";
        } else{
            document.getElementById("campoInputTipoTramite").style.borderBottom = "2px solid white";
            document.getElementById("iconoTramite").classList.add("iconoBlanco");
            
        }

        if(inputNumeroDeDocumento === ''){
            camposVacios = true;
            document.getElementById("iconoDni").classList.remove("iconoBlanco");
            document.getElementById("iconoDni").classList.add("iconoError");
            document.getElementById("campoInputDni").style.borderBottom = "2px solid #FF9999";
        } else{
            document.getElementById("campoInputDni").style.borderBottom = "2px solid white";
            document.getElementById("iconoDni").classList.add("iconoBlanco");           
        }

        if(inputNombreUsuario === ""){
            camposVacios = true;
            document.getElementById("iconoNombre").classList.remove("iconoBlanco");
            document.getElementById("iconoNombre").classList.add("iconoError");
            document.getElementById("campoInputNombre").style.borderBottom = "2px solid #FF9999";

        } else{
            document.getElementById("campoInputNombre").style.borderBottom = "2px solid white";
            document.getElementById("iconoNombre").classList.add("iconoBlanco");               
        }

        if(inputApellidoUsuario === ""){
            camposVacios = true;
            document.getElementById("iconoApellido").classList.remove("iconoBlanco");
            document.getElementById("iconoApellido").classList.add("iconoError");
            document.getElementById("campoInputApellido").style.borderBottom = "2px solid #FF9999";
        } else{
            document.getElementById("campoInputApellido").style.borderBottom = "2px solid white";
            document.getElementById("iconoApellido").classList.add("iconoBlanco");                 
        }
        
        if(inputLocalidad === "0"){
            camposVacios = true;
            document.getElementById("iconoLocalidad").classList.remove("iconoBlanco");
            document.getElementById("iconoLocalidad").classList.add("iconoError");
            document.getElementById("campoInputLocalidad").style.borderBottom = "2px solid #FF9999";
        } else{
            document.getElementById("campoInputLocalidad").style.borderBottom = "2px solid white";
            document.getElementById("iconoLocalidad").classList.add("iconoBlanco");
        }

        if(camposVacios == false){

            document.getElementById("campos-error").style.display = "none";

            if (pasoActual === 1) {
                dangerBTN.style.display="flex"
                document.querySelector('.btn-home').style.display = 'none';
                var progressBar = document.querySelector(".progress-bar")
                progressBar.style.width = "50%"
                document.querySelector('.formContainer').style.display = 'none';
                document.querySelector('.Fecha').style.display = 'block';
                document.querySelector('.Datos').style.display = 'none';
                document.querySelector('.calendarContainer').style.display = 'flex';
                pasoActual = 2;
            } else if (pasoActual === 2) {
                dangerBTN.style.display="flex"
                document.querySelector('.btn-home').style.display = 'none';
                var progressBar = document.querySelector(".progress-bar")
                document.querySelector('.Fecha').style.display = 'none';
                document.querySelector('.Confirmacion').style.display = 'block';
                progressBar.style.width = "100%"
                document.querySelector('.calendarContainer').style.display = 'none';
                document.querySelector('.messageContainer').style.display = 'block';
                pasoActual = 3;
                succesBTN.style.display="none"
                confirmarBTN.style.display = "flex"
            } 

        } else{
            document.getElementById("campos-error").style.display = "block";
        }

    });

    dangerBTN.addEventListener('click', function () {

        if (pasoActual === 2) {
            document.querySelector('.btn-home').style.display = 'block';
            var progressBar = document.querySelector(".progress-bar")
            progressBar.style.width = "25%"
            document.querySelector('.calendarContainer').style.display = 'none';
            document.querySelector('.formContainer').style.display = 'block';
            document.querySelector('.Fecha').style.display = 'none';
            document.querySelector('.Datos').style.display = 'block';
            pasoActual = 1;
            dangerBTN.style.display="none"
        } else if (pasoActual === 3) {
            confirmarBTN.style.display = "none"
            succesBTN.style.display="flex"
            var progressBar = document.querySelector(".progress-bar")
            document.querySelector('.Confirmacion').style.display = 'none';
            document.querySelector('.Fecha').style.display = 'block';
            progressBar.style.width = "50%"
            document.querySelector('.messageContainer').style.display = 'none';
            document.querySelector('.calendarContainer').style.display = 'flex';
            pasoActual = 2;
        }
       
    });


    confirmarBTN.addEventListener("click", function (e) {
        e.preventDefault()

        $(".loading").css("display", "flex"); 
        setTimeout(function () {
            $(".loading").css("display", "none");  
            $(location).attr('href', "./home.html");
        }, 1000);
    })


});