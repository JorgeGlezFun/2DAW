function frase(){
    var frasecita = prompt("Introduce una frase: ");
    for (i of frasecita){
        if (isNaN(i)){
            document.write(i + "<br>");
        }
    }
}