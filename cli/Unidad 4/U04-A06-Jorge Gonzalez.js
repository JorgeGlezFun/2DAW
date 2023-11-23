var arrayNotasFijo = new Array();
var arrayNotasVolatil = new Array();
var arrayModulos = new Array();
var arrayAlumnosYNotas = new Array();
function creaArrays(){
for (var a = 0; a < 5; a++) {
        var alumnos = prompt("Introduce los nombres de los alumnos: ");
        for (var n = 0; n < 3; n++) {
            var nota = parseInt(prompt("Introduce la nota del módulo: "));
            arrayNotasVolatil.push(nota);
            arrayNotasFijo.push(nota);
        }
        arrayAlumnosYNotas.push([alumnos, arrayNotasVolatil]);
        arrayNotasVolatil = [];
    }
    for (var n = 0; n < 3; n++) {
        var modulo = prompt("Introduce los nombres de los módulos: ");
        arrayModulos.push(modulo);
    }
    var boletin = new Array(arrayModulos, arrayAlumnosYNotas);
    console.log(boletin);
};

function comprobarMenores(a){
    return 10 >= a && a >= 0;
};

function creaModulos(){
    if (arrayNotasFijo.every(comprobarMenores)){
        for (m of arrayModulos) {
            document.write("<td>" + m + "</td>");
        }
    } else {
        document.write("Los valores que has introducido no son válidos.");
    };
};

function creaBoletin(){
    if (arrayNotasFijo.every(comprobarMenores)){
        for (a in arrayAlumnosYNotas) {
            document.write(
                    "<tr>" +
                        "<td>" + arrayAlumnosYNotas[a][0]+ "</td>" + // Nombre
                        "<td>" + arrayAlumnosYNotas[a][1][0] + "</td>" + // Nota 1
                        "<td>" + arrayAlumnosYNotas[a][1][1] + "</td>" + // Nota 2
                        "<td>" + arrayAlumnosYNotas[a][1][2] + "</td>" + // Nota 3
                    "</tr>"
            );
        };
    };
}
