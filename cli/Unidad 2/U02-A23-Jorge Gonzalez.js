function figura() {
    // var espacios = parseInt(prompt("Pulsa 1 para los números pares" + "\n" + "Pulsa 2 para los números impares"))
    var numero = parseInt(prompt("Introduce un número: "));
    var division = Math.floor(numero / 2);
    if (numero % 2 == 0){
        for (i = 2; i <= numero; i += 2){
            document.write('&nbsp&nbsp'.repeat(division) + '*'.repeat(i) + '<br>');
            division--;
        }
        division = 2;
        for (n = numero - 2; n >= 2; n -= 2){
            document.write('&nbsp&nbsp'.repeat(division) + '*'.repeat(n) + '<br>');
            division++;
        } 
    } else {
        for (i = 1; i <= numero; i += 2){
            document.write('&nbsp&nbsp'.repeat(division) + '*'.repeat(i) + '<br>');
            division--;
        }
        division = 1;
        for (n = numero - 2; n >= 1; n -= 2){
            document.write('&nbsp&nbsp'.repeat(division) + '*'.repeat(n) + '<br>');
            division++;
        } 
    }
}