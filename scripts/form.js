document.addEventListener('DOMContentLoaded', function () {
    var pasoActual = 1;
    var succesBTN = document.querySelector('.btn-siguiente');
    var confirmarBTN = document.querySelector('.btn-confirmar');
    var dangerBTN =   document.querySelector('.btn-danger');


    var camposVacios = false;
    
    var tramiteVacio = false;
    var documentoVacio = false;
    var nombreVacio = false;
    var ApellidoVacio = false;
    var localidadVacia = false;

    succesBTN.addEventListener('click', function () {

        var inputTipoDeTramite =   document.querySelector('#tipo_tramite').value;
        var inputNumeroDeDocumento =   document.querySelector('#numero_documento').value;
        var inputNombreUsuario =   document.querySelector('#nombre').value;
        var inputApellidoUsuario =   document.querySelector('#apellido').value;
        var inputLocalidad =   document.querySelector('#localidad').value;


        if(inputTipoDeTramite === "0"){
            camposVacios = true;
            tramiteVacio = true;
        }

        if(inputNumeroDeDocumento === ''){
            camposVacios = true;
            documentoVacio = true;
        }

        console.log("input dni = " + inputNumeroDeDocumento);

        if(inputNombreUsuario === ""){
            camposVacios = true;
            nombreVacio = true;
        }

        if(inputApellidoUsuario === ""){
            camposVacios = true;
            ApellidoVacio = true;
        }

        if(inputLocalidad === "0"){
            camposVacios = true;
            localidadVacia = true;
        }

        if(camposVacios == false){

            ocument.getElementById("campos-error").style.display = "none";

            if (pasoActual === 1) {
                dangerBTN.style.display="flex"
                var progressBar = document.querySelector(".progress-bar")
                progressBar.style.width = "50%"
                document.querySelector('.formContainer').style.display = 'none';
                document.querySelector('.Fecha').style.display = 'block';
                document.querySelector('.Datos').style.display = 'none';
                document.querySelector('.calendarContainer').style.display = 'flex';
                pasoActual = 2;
            } else if (pasoActual === 2) {
                dangerBTN.style.display="flex"
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

            if(tramiteVacio){
                console.log("tramite vacio");
                document.getElementById("campos-error").style.display = "block";
                document.getElementById("campoInputTipoTramite").style.borderBottom = "2px solid #FF9999";
            }

            if(documentoVacio){
                console.log("documento vacio");
                document.getElementById("campos-error").style.display = "block";
                document.getElementById("campoInputDni").style.borderBottom = "2px solid #FF9999";
            }

            if(nombreVacio){
                console.log("nombre vacio");
                document.getElementById("campos-error").style.display = "block";
                document.getElementById("campoInputNombre").style.borderBottom = "2px solid #FF9999";
            }

            if(ApellidoVacio){
                console.log("apellido vacio");
                document.getElementById("campos-error").style.display = "block";
                document.getElementById("campoInputApellido").style.borderBottom = "2px solid #FF9999";
            }

            if(localidadVacia){
                console.log("localidad vacio");
                document.getElementById("campos-error").style.display = "block";
                document.getElementById("campoInputLocalidad").style.borderBottom = "2px solid #FF9999";
            }
        }


       
    });

    dangerBTN.addEventListener('click', function () {
        if (pasoActual === 2) {
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