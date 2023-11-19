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

    var diasContainer = document.querySelector('.dias-container');
    var mesActualElement = document.getElementById('mesActual');
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth();
    var anioActual = fechaActual.getFullYear();

    var flagDate = false

    var flagDateInvalid = false

    var selectDate = document.getElementById('Date');
    var errorInputEmpty = document.querySelector('.errorInputEmpty');



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
                if ( flagDateInvalid = false) return
                if(!flagDate){ 
                    errorInputEmpty.style.display = selectDate.value === '0' ? 'block' : 'none';
                    return
                }


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
            document.getElementById("popUp").style.display = 'flex'; 
        }, 1000);
    })


    document.getElementById("cerrarPopup").addEventListener('click', function(){
        $(location).attr('href', "./home.html");
        const popup = document.getElementById('popUp');
        popup.style.display = 'none'; 
    });

    // -------------------------Calendario---------------- //



    selectDate.addEventListener('change', function () {

        if( selectDate.value === '0'){
            errorInputEmpty.style.display = 'block'
        }
        else{
            errorInputEmpty.style.display = 'none'
            flagDate = true
        }
    });
    
    function mostrarCalendario(mes, anio) {

        diasContainer.innerHTML = '';

        var diasSemana = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];


        diasSemana.forEach(function (nombreDia) {
            var diaSemana = document.createElement('div');
            diaSemana.classList.add('dia', 'nombre-dia');
            diaSemana.textContent = nombreDia;
            diasContainer.appendChild(diaSemana);
        });


        var primerDiaMes = new Date(anio, mes, 1).getDay();
        var ultimoDiaMes = new Date(anio, mes + 1, 0).getDate();


        var diasTotales = Math.ceil((primerDiaMes + ultimoDiaMes) / 7) * 7;


        var diasMesAnterior = primerDiaMes > 0 ? primerDiaMes : 7;


        for (var i = diasMesAnterior - 1; i >= 0; i--) {
            var diaAnterior = document.createElement('div');
            diaAnterior.classList.add('dia', 'mes-anterior', 'cuadrado-blanco');
            diasContainer.appendChild(diaAnterior);
        }



        for (var i = 1; i <= ultimoDiaMes; i++) {
            var dia = document.createElement('div');
            var DateInput = document.querySelector('#campoInputDate')
            var DateError = document.querySelector('.errorDay')
            
            dia.classList.add('dia');
            dia.classList.add(i)
            dia.textContent = i;


            if (i % 2 === 0) {
                dia.classList.add('verde');
                (function (diaActual) {
                    flagDate = false
                    dia.addEventListener('click', function() {
                        var diaPintado = document.querySelector(".azul");
                        var diaClick =  document.getElementsByClassName(diaActual)[0]
                        if (diaPintado) { 
                            diaPintado.classList.remove("azul");
                        }
                        diaClick.classList.add("azul");
                        DateInput.style.display = "flex"
                        DateError.style.display = "none"
                        flagDateInvalid = false
                    });
                })(i);
            }else{
                (function (diaActual) {
                    flagDate = false
                    flagDateInvalid = true
                    dia.addEventListener('click', function() {
                        var diaPintado = document.querySelector(".azul");
                        if (diaPintado) { 
                            diaPintado.classList.remove("azul");
                        }
                        DateInput.style.display = "none"
                        DateError.style.display = "block"
                        errorInputEmpty.style.display = "none"
                    });
                   
                })(i);
            }

            diasContainer.appendChild(dia);
        }


        var diasMesSiguiente = diasTotales - (diasMesAnterior + ultimoDiaMes);


        for (var i = 1; i <= diasMesSiguiente; i++) {
            var diaSiguiente = document.createElement('div');
            diaSiguiente.classList.add('dia', 'mes-siguiente', 'cuadrado-blanco');
            diasContainer.appendChild(diaSiguiente);
        }


        mesActualElement.textContent = obtenerNombreMes(mes) + ' ' + anio;
    }


    document.getElementById('prevButton').addEventListener('click', function () {
        cambiarMes(-1);
    });

    document.getElementById('nextButton').addEventListener('click', function () {
        cambiarMes(1);
    });


    function obtenerNombreMes(numeroMes) {
        var nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return nombresMeses[numeroMes];
    }


    function cambiarMes(direccion) {

        var fechaLimite = new Date("November 1, 2023");
    

        var nuevaFecha = new Date(anioActual, mesActual + direccion, 1);
    

        if (direccion < 0 && nuevaFecha < fechaLimite) {
            return;
        }
    
        mesActual += direccion;
    
        if (mesActual < 0) {
            mesActual = 11;
            anioActual--;
        } else if (mesActual > 11) {
            mesActual = 0;
            anioActual++;
        }
    
        mostrarCalendario(mesActual, anioActual);
    }


    mostrarCalendario(mesActual, anioActual);


});