/**
 * Realiza una aplicación que tenga una imagen, y que muestre un mensaje indicando si la imagen
 * no se ha cargado correctamente, ya sea por un error o porque el usuario lo haya detenido.
 */
var img = document.getElementById("foto");
var frase = "La imagen no ha cargado correctamente.";

img.addEventListener('error',  mistake =>{
    document.write(frase);
});

img.addEventListener('abort',  mistake =>{
    document.write(frase);
});
