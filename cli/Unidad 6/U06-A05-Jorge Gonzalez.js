/* Realizar un código en el que tengamos en HTML varios párrafos con un determinado texto escrito.
Crear un botón para ocultar/visualizar el párrafo elegido.
Para ello puedes utilizar dos clases en CSS y, mediante JavaScript, se irá
cambiando la clase al elemento del DOM */
var parrafos = document.getElementById('parrafos');
var boton = document.getElementById('boton');
var booleano = false;

boton.addEventListener('click', ()=>{
    var parrafo = parrafos.value;
    var parrafo1 = document.getElementById(parrafo);
    console.log(parrafo);
    if (booleano) {
        parrafo1.className = 'escondido';
        booleano = false;
    } else {
        parrafo1.className = '';
        booleano = true;
    }
});
