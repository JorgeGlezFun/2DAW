// Realiza un script que muestre en el documento los múltiplos de 8 comprendidos entre dos números que se solicitarán al usuario.
// No importa el orden en el que los inserte el usuario, siempre se presentarán de menor al mayor, ambos inclusive. 
function multiplos(){
    var num1 = parseInt(prompt("Introduce el primer número: "));
    var num2 = parseInt(prompt("Introduce el segundo número: "));
    var menor = Math.min(num1,num2);
    var mayor = Math.max(num1,num2);
    var cadena = "";

    for (i = menor; i <= mayor; i++){
        if (i % 8 == 0 && i != 0) {
                cadena = cadena + " " + i;
            }
        }
    document.getElementById("multiplo").innerHTML=(cadena);
}