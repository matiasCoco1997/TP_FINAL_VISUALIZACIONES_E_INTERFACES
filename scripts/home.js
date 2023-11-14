document.addEventListener('DOMContentLoaded', function () {
    var diasContainer = document.querySelector('.dias-container');
    var mesActualElement = document.getElementById('mesActual');
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth();
    var anioActual = fechaActual.getFullYear();

    function mostrarCalendario(mes, anio) {
        // Limpiar el contenedor antes de mostrar el nuevo mes
        diasContainer.innerHTML = '';

        var diasSemana = ['Dom', 'Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb'];

        // Agregar los nombres de los días de la semana
        diasSemana.forEach(function (nombreDia) {
            var diaSemana = document.createElement('div');
            diaSemana.classList.add('dia', 'nombre-dia');
            diaSemana.textContent = nombreDia;
            diasContainer.appendChild(diaSemana);
        });

        // Obtener el primer día del mes y el último día del mes
        var primerDiaMes = new Date(anio, mes, 1).getDay();
        var ultimoDiaMes = new Date(anio, mes + 1, 0).getDate();

        // Calcular el número total de días que necesitamos mostrar (incluyendo los días del mes anterior y siguiente)
        var diasTotales = Math.ceil((primerDiaMes + ultimoDiaMes) / 7) * 7;

        // Calcular cuántos días del mes anterior necesitamos mostrar al principio del calendario
        var diasMesAnterior = primerDiaMes > 0 ? primerDiaMes : 7;

        // Agregar días del mes anterior al principio del calendario
        for (var i = diasMesAnterior - 1; i >= 0; i--) {
            var diaAnterior = document.createElement('div');
            diaAnterior.classList.add('dia', 'mes-anterior', 'cuadrado-blanco');
            diasContainer.appendChild(diaAnterior);
        }

        // Agregar los elementos del calendario
        for (var i = 1; i <= ultimoDiaMes; i++) {
            var dia = document.createElement('div');
            dia.classList.add('dia');
            dia.textContent = i;

            // Marcar algunos días en verde (puedes personalizar esta lógica según tus necesidades)
            if (i % 2 === 0) {
                dia.classList.add('verde');
            }

            diasContainer.appendChild(dia);
        }

        // Calcular cuántos días del mes siguiente necesitamos mostrar al final del calendario
        var diasMesSiguiente = diasTotales - (diasMesAnterior + ultimoDiaMes);

        // Agregar días del mes siguiente al final del calendario
        for (var i = 1; i <= diasMesSiguiente; i++) {
            var diaSiguiente = document.createElement('div');
            diaSiguiente.classList.add('dia', 'mes-siguiente', 'cuadrado-blanco');
            diasContainer.appendChild(diaSiguiente);
        }

        // Actualizar el mes actual en el elemento HTML
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
        // Obtener la fecha límite (noviembre de 2023)
        var fechaLimite = new Date("November 1, 2023");
    
        // Calcular la nueva fecha antes de cambiar el mes
        var nuevaFecha = new Date(anioActual, mesActual + direccion, 1);
    
        // Comparar con la fecha límite
        if (direccion < 0 && nuevaFecha < fechaLimite) {
            // Si se intenta ir antes de noviembre de 2023, no hacer nada
            return;
        }
    
        // Cambiar el mes según la dirección
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
