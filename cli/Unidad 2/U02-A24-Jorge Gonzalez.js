function fibonacci(numero){
    if (numero == 0){
        document.write("El fibonacci de " + numero + " es: " + numero);    
    } else if (numero == 1){
        document.write("El fibonacci de " + numero + " es: " + numero);
    } else {
        var a = 0;
        var b = 1;
        var res = a + b;
        document.write("El fibonacci de " + numero + " es: <br>");
        document.write("1 -> " + a + " + " + b + " = " + res + "<br>");
        for (var i = numero - 1; i > 0; i--){
            document.write((numero - (i - 1)) + " -> " + a + " + " + b + " = " + res + "<br>");
            a = b;
            b = res;
            res = a + b;
        }
    }
}