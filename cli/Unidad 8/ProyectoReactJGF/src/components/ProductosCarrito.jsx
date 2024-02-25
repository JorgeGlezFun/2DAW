import React from 'react';
import datosCarrito from '../datosCarrito.json';

const ProductosCarrito = ({ productos }) => {
  if (!datosCarrito || !datosCarrito.carrito || datosCarrito.carrito.length === 0) {
    return <h2 className='carritoVacio'>Carrito Vacio</h2>;
  }

  return (
    <div>
      {datosCarrito.carrito.map((producto, index) => (
        <div key={index} className='juegosCarrito'>
          <div className="productoCarrito">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="contenidoCarrito">
              <h2>{producto.nombre}</h2>
              <h3 className="precioCarrito">Cantidad: {producto.cantidad}</h3>
              <h3 className="precioCarrito">Precio: {producto.precio}</h3>
              <h3 className="precioCarrito">Total: {producto.cantidad * parseFloat(producto.precio.replace('€',''))}€</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosCarrito;
