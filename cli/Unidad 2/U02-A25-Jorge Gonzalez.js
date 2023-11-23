var numero = parseInt(prompt("Introduce un número: "));
function sucesion_geometrica(n){
    res = 5;
    for (var i = numero; i > 0; i--){
        document.write(res + "<br>");
        res = res * 3;
    }
}