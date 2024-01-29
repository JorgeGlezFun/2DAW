// Crear un código en HTML en el que tengamos un boton para añadir nodos y otro para eliminar nodos.
// Los nodos creados y eliminados serán elementos nuevos (<div>) del documento HTML,
// donde se deberá escribir un texto solicitado al cliente (por ejemplo por prompt).
// El código de crear, asi como de eliminar nodos deberá estar en JavaScript. Utilizando el manejo del DOM.

var crear = document.getElementById('crear');
crear.addEventListener('click', ()=>{
    var contenido = prompt('Introduce el texto a introducir: ');
    var div = document.createElement('div');
    var texto = document.createTextNode(contenido);
    document.body.appendChild(div);
    div.appendChild(texto);

    var borrar = document.getElementById('borrar');
    borrar.addEventListener('click', ()=>{
        document.body.removeChild(div);
    });
});
