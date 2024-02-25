import React from 'react';
import Button from './Button';

const Productos = ({ productos }) => {
    const gruposDeProductos = [];
    for (let i = 0; i < productos.length; i += 5) {
        gruposDeProductos.push(productos.slice(i, i + 5));
    }

    function addCarrito(id) {
        console.log('http://localhost:5173/src/Carrito.php?id=' + id);
        fetch('http://localhost:5173/src/Carrito.php?id=' + id)
            .then(response => {
                if (response.ok) {
                    /* window.location.href = 'http://localhost:5173/Cart' */
                    window.alert("Producto añadido al carrito")
                }
            })
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
                            <Button accion={() => addCarrito(producto.id)} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Productos;
