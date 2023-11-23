function entera(numero){
    var resultado = 0;
    for (n of numero){
        if (isNaN(n)){
            break;
        } else {
            resultado += parseInt(n);
        }
    }
    document.write("El resultado de la suma de todos los digitos de la parte entera del número introducido es: " + resultado);
}

function decimal(numero){
    var resultado = 0;
    for (n of numero){
        if (!isNaN(n)){
            resultado += parseInt(n);
        }
    }
    document.write("El resultado de la suma de todos los digitos del número introducido es: " + resultado);
}
