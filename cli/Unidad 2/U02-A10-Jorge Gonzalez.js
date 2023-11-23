function tablas(){
    var num = parseInt(prompt("Introduce un número: "));
    for (i = 1; i <= 10; i++){
        document.write("<h2>" + num + " x " + i + " = " + i * num + "</h2>");
    }
}