/**function factorial(){
    var numero = parseInt(prompt("Introduce el número del cual quieras saber su factorial"));
    var resultado = 1;
    for (i = 1; i <= numero; i++){
        resultado = resultado * i;
    }
    document.getElementById("fact").innerHTML=(resultado);
}
function factorial(){
    var numero = parseInt(prompt("Introduce el número del cual quieras saber su factorial"));
    var res = numero;
    var acc = 1;
    while (acc != numero){
        res = acc * res;
        acc++;
    }
    document.getElementById("fact").innerHTML=(res)
}
*/
var numero = parseInt(prompt("Introduce el número del cual quieras saber su factorial"));
function factorial(num, acc, res){
    if (acc >= numero){
        document.getElementById("fact").innerHTML=(res)
    } else {
        factorial(numero - 1, acc + 1, res * numero)
    }
}
factorial(numero, 0, 1)