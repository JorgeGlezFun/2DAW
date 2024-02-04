
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
var coches = [
    new Vehiculo('Hyundai', 'i30', 'Blanco', '2008'),
    new Vehiculo('Audi', 'R8', 'Rojo', '2017'),
    new Vehiculo('Volkswagen', 'Passat', 'Negro', '2020'),
    new Vehiculo('Chevrolet', 'Epica', 'Champagne', '2008'),
    new Vehiculo('Mercedes', 'AMG', 'Plata', '2024')
];

// c)
var tabla = document.createElement('table');
tabla.setAttribute('border', '2');
var longitud = coches.length;

const nombres = ['Marca', 'Modelo', 'Color', 'Año'];
var longitudNombres = nombres.length;
var filaGrande = document.createElement('tr');

for (var n = 0; n < longitudNombres; n++){
    var columnaGrande = document.createElement('th');
    var textoFilaGrande = document.createTextNode(nombres[n]);
    columnaGrande.appendChild(textoFilaGrande);
    filaGrande.appendChild(columnaGrande);
    tabla.appendChild(filaGrande);
}

for (var c = 0; c < longitud; c++) {
    var fila = document.createElement('tr');
    var columnaMarca = document.createElement('td');
    var columnaModelo = document.createElement('td');
    var columnaColor = document.createElement('td');
    var columnaAnyo = document.createElement('td');
    var textoColumnaMarca = document.createTextNode(coches[c].marca);
    var textoColumnaModelo = document.createTextNode(coches[c].modelo);
    var textoColumnaColor = document.createTextNode(coches[c].color);
    var textoColumnaAnyo = document.createTextNode(coches[c].anyo);
    columnaMarca.appendChild(textoColumnaMarca);
    columnaModelo.appendChild(textoColumnaModelo);
    columnaColor.appendChild(textoColumnaColor);
    columnaAnyo.appendChild(textoColumnaAnyo);
    fila.appendChild(columnaMarca);
    fila.appendChild(columnaModelo);
    fila.appendChild(columnaColor);
    fila.appendChild(columnaAnyo);
    tabla.appendChild(fila);
}

document.body.appendChild(tabla);
