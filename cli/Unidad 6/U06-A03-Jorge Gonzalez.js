// Crear objeto Vehículo.
// a) Crear constructor con las siguientes propiedades: marca, modelo, color y año fabricación
// b) Introducir 5 vehículos diferente.
// c) Crear un botón para que genere una tabla (con manejo del DOM) y la visualicemos en la pagina web

// a)
function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
};

// b)
var coches = {
    "coche1": new Vehiculo('Hyundai', 'i30', 'Blanco', '2008'),
    "coche2": new Vehiculo('Audi', 'R8', 'Rojo', '2017'),
    "coche3": new Vehiculo('Volkswagen', 'Passat', 'Negro', '2020'),
    "coche4": new Vehiculo('Chevrolet', 'Epica', 'Champagne', '2008'),
    "coche5": new Vehiculo('Mercedes', 'AMG', 'Plata', '2024')
}

var longitud = coches.length;
const valoresObjeto = ['marca',]
// c)
var tabla = document.createElement('table');
var cuerpoTabla = document.createElement('tbody');
var columna = document.createElement('td');
  // Crea las celdas
for (var i = 0; i < longitud; i++) {
// Crea las hileras de la tabla
    var fila = document.createElement("tr");
    var columna = document.createElement("td");
    var textoColumna = document.createTextNode(
        coches['coche' + i].marca
        );
    columna.appendChild(textoColumna);
    fila.appendChild(columna);
    cuerpoTabla.appendChild(fila);
}
tabla.appendChild(cuerpoTabla);
document.appendChild(tabla);
tabla.setAttribute("border", "2");
