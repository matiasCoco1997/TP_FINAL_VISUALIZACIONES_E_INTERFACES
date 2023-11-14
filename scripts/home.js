document.addEventListener('DOMContentLoaded', function () {
    var diasContainer = document.querySelector('.dias-container');
    var diasSemana = ['Dom', 'Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb'];

    // Agregar los nombres de los días de la semana
    diasSemana.forEach(function (nombreDia) {
        var diaSemana = document.createElement('div');
        diaSemana.classList.add('dia', 'nombre-dia');
        diaSemana.textContent = nombreDia;
        diasContainer.appendChild(diaSemana);
    });

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Obtener el primer día del mes y el último día del mes
    var primerDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1).getDay();
    var ultimoDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();

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
});
