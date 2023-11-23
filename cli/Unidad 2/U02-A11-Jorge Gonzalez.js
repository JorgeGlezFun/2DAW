function dni(){
    var identificacion = prompt("Introduce tu número del DNI: "); // Correcto
    var longitud = identificacion.length; // Correcto
    var numero = parseInt(identificacion.substring(0, longitud - 1)); // Correcto
    var letra = identificacion.substring(longitud - 1, longitud);
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if (numero <= 99999999 && numero >= 0){
        var resto = numero % 23;
        if (letras[resto] != letra){
            document.write("La letra que introduciste en tu DNI no es válida.");
        } else {
            document.write("Tanto el número como la letra del DNI que has introducido son correctos.");
        }
    } else {
        document.write("El número introducido no es correcto");
    }
}