import React from 'react';
import Button from './Button';

const Productos = ({ productos }) => {
    const gruposDeProductos = [];
    for (let i = 0; i < productos.length; i += 5) {
        gruposDeProductos.push(productos.slice(i, i + 5));
    }

    function addCarrito(id) {
        fetch('http://0.0.0.0:8000/src/Carrito.php?operation=add&id=' + id)
            .then(response => {
                if (response.ok) {
                    console.log('Producto añadido al carrito con éxito');
                    window.location.href = 'http://localhost:5173/Cart'
                }
            })
            .catch(error => {
                console.error('Error al añadir producto al carrito:', error);
            });
    }


    return (
        <div>
            {gruposDeProductos.map((grupo, index) => (
                <div key={index} className='juegos'>
                    {grupo.map((producto, i) => (
                        <div key={i} className="producto">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <div className="contenido">
                                <h3>{producto.nombre}</h3>
                                <p className="precio">Desde tan solo <span>{producto.precio}</span></p>
                            </div>
                            <Button class='anadirCarrito' texto='Añadir al carrito' accion={() => addCarrito(producto.id)} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Productos;
