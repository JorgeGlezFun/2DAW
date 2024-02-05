// Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos.
// Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.
// Tabla generada por manejo del DOM

// Creamos el Array
var expedientes = [];

for (var e = 0; e < 5; e++) {
    expedientes.push([])
    var alumno = prompt('Introduce un alumno: ');
    expedientes[e][0] = alumno;
    for (var n = 0; n < 3; n++) {
        var nota = prompt('Introduce una nota: ');
        expedientes[e].push(nota)
    }
}

// Creamos la tabla
var tabla = document.createElement('table');
tabla.setAttribute('border', '2');

// Creamos la fila que contendrá los titulos de la tabla
var filaTitulos = document.createElement('tr');
var columnaAlumnos = document.createElement('th');
var columnaModulos = document.createElement('th');
var textoColumnaAlumnos = document.createTextNode('Alumno');
var textoColumnaModulos = document.createTextNode('Módulos');
columnaAlumnos.appendChild(textoColumnaAlumnos);
columnaModulos.appendChild(textoColumnaModulos);
columnaAlumnos.setAttribute('rowspan', 2)
columnaModulos.setAttribute('colspan', 3)
filaTitulos.appendChild(columnaAlumnos);
filaTitulos.appendChild(columnaModulos);
tabla.appendChild(filaTitulos);

// Creamos la fila que contendrá los nombres de los módulos
var filaModulos = document.createElement('tr');
var columnaDiseno = document.createElement('th');
var columnaCliente = document.createElement('th');
var columnaServidor = document.createElement('th');
var textoColumnaDiseno = document.createTextNode('Diseño');
var textoColumnaCliente = document.createTextNode('Cliente');
var textoColumnaServidor = document.createTextNode('Servidor');
columnaDiseno.appendChild(textoColumnaDiseno);
columnaCliente.appendChild(textoColumnaCliente);
columnaServidor.appendChild(textoColumnaServidor);
filaModulos.appendChild(columnaDiseno);
filaModulos.appendChild(columnaCliente);
filaModulos.appendChild(columnaServidor);
tabla.appendChild(filaModulos);

// Creamos las filas y columnas de los expedientes
var longitudExpedientes = expedientes.length;
var longitudExpediente = expedientes[0].length;

for (var a = 0; a < longitudExpedientes; a++) {
    var fila = document.createElement('tr');
    var columnaAlumno = document.createElement('td')
    var textoColumnaAlumno = document.createTextNode(expedientes[a][0]);
    columnaAlumno.appendChild(textoColumnaAlumno);
    fila.appendChild(columnaAlumno);

    for (var n = 1; n < longitudExpediente; n++) {
        var columnaNotas = document.createElement('td')
        var textoColumnaNotas = document.createTextNode(expedientes[a][n]);
        columnaNotas.appendChild(textoColumnaNotas);
        fila.appendChild(columnaNotas);
    }

    tabla.appendChild(fila);
}

document.body.appendChild(tabla);
