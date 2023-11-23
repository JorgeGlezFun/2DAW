/**
 * Crear objeto Vehículo.

a.- Crear constructor. H
b.- Crear propiedades: marca, modelo, color y año fabricación H
c.-  Instanciar dos objetos. H
d.- Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca. H
e.- Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color. H
f.- Crear el método mostrarDatos. H
g.- Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha acelerado a la velocidad pasada. H
h.- Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _, modelo_, de color_ ha arrancado. H
i.- Asignar una nueva propiedad cilindrada H
j.- Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ ha parado). H
k.- Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(), Object.keys(). 
l.- Observa y analiza las diferencias. ¿Cómo se podrían modificar las propiedades a mostrar?
*/
function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;

    this.mostrarDatos = function(){
        return `Marca: ${this.marca} <br> 
                Modelo: ${this.modelo} <br> 
                Color: ${this.color} <br>  
                Año: ${this.anyo}`;
    };

    this.acelerar = function(v){
        return `El vehículo ha acelerado con una velocidad de: ${v}km/h`
    };

    this.arrancar = function(){
        return `El coche de marca: ${this.marca}, modelo: ${this.modelo} y de color: ${this.color} ha arrancado.`;
    }
};

var Coche1 = new Vehiculo("Hyundai", "i30", "Blanco", 2008, "90cv");
var Coche2 = new Vehiculo("Audi", "R8", "Negro", 2016);

Object.defineProperty(Coche1, "cilindrada", {value: '90cv'});

Vehiculo.prototype.frenar = function(){
    return `El coche de marca: ${this.marca}, modelo: ${this.modelo} y de color: ${this.color} ha frenado.`;
}


function filas(coche){
    for (prop in coche) {
        document.write(
            "<tr>" +
            "<td>" + prop + ": " + "</td>" +
            "<td>" + coche[prop] + "</td>" +
            "</tr>"
        );
    };
};