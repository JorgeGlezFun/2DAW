function traduccion(){
    var palabra = prompt("Introduce una de las siguientes palabras que quieras traducir: (casa, mesa, perro, gato)").toLowerCase();
    var espanyol = ["casa", "mesa", "perro", "gato"];
    var ingles = ["home", "table", "dog", "cat"];
    if (espanyol.includes(palabra)){
        for (p in espanyol){
            if (espanyol[p] == palabra){
                document.write(ingles[p]);
            }
        }
    } else {
        document.write("La palabra introducida no esta disponible para su traduccion");
    }
}