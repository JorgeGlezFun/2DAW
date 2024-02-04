/* Realizar un código en el que tengamos en HTML varios párrafos con un determinado texto escrito.
Crear un botón para ocultar/visualizar el párrafo elegido.
Para ello puedes utilizar dos clases en CSS y, mediante JavaScript, se irá
cambiando la clase al elemento del DOM */
var parrafos = document.getElementById('parrafos').value;
var parrafo1 = document.getElementById('parrafo1');
var parrafo2 = document.getElementById('parrafo1');
var parrafo3 = document.getElementById('parrafo1');
var boton = document.getElementById('boton');
var booleano = false;

function escondite(parrafo){
    if (booleano) {
        parrafo.className = 'escondido';
        booleano = false;
    } else {
        parrafo.className = '';
        booleano = true;
    }
}

boton.addEventListener('click', escondite(parrafos));
