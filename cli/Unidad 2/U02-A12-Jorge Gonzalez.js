function digitos(){
    var numero = prompt("Introduce un número: ");
    var longitud = numero.length;
    if (numero <= 1000){
        for (i = 0; i < longitud; i++){
            document.write(numero[i] + "<br>");
        }
    } else {
        document.write("El número que has introducido no es válido.");
    }
}