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
// a
function Vehiculo(marca, modelo, color, anyo){
    // b
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;

    // f
    this.mostrarDatos = function(){
        return `Marca: ${this.marca} <br> 
                Modelo: ${this.modelo} <br> 
                Color: ${this.color} <br>  
                Año: ${this.anyo}`;
    };

    // g
    this.acelerar = function(v){
        return `El vehículo ha acelerado con una velocidad de: ${v}km/h`
    };

    // h
    this.arrancar = function(){
        return `El coche de marca: ${this.marca}, modelo: ${this.modelo} y de color: ${this.color} ha arrancado.`;
    }
};

// c
var Coche1 = new Vehiculo("Hyundai", "i30", "Blanco", 2008, "90cv");
var Coche2 = new Vehiculo("Audi", "R8", "Negro", 2016);

// d
document.write(`La marca del coche 1 es: ${Coche1.marca} <br>`);

// e
document.write(`El color del coche 2 es: ${Coche2['color']} <br>`);

// i
Object.defineProperty(Coche1, "cilindrada", {value: '90cv'});

// j
Vehiculo.prototype.frenar = function(){
    return `El coche de marca: ${this.marca}, modelo: ${this.modelo} y de color: ${this.color} ha frenado.`;
}

// k
for (prop in Coche1) {
    document.write(`${prop}: ${Coche1[prop]} <br>`);
}

document.write(`${Object.getOwnPropertyNames(Coche1)} <br>`);

document.write(`${Object.keys(Coche1)} <br>`);

// l
// La diferencia entre el for in, Object.getOwnPropertyNames() y Object.keys() es que el for in te los muestra uno a uno, y los otros dos te muestran el contenido con arrays.