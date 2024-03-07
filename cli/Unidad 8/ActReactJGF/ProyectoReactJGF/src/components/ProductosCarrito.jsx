import React from 'react';
import datosCarrito from '../datosCarrito.json';
import Button from './Button';

const ProductosCarrito = () => {

  function addCarrito(id) {
    fetch('http://0.0.0.0:8000/src/Carrito.php?operation=add&id=' + id)
        .then(response => {
            if (response.ok) {
                console.log('Producto añadido al carrito con éxito');
            }
        })
        .catch(error => {
            console.error('Error al añadir producto al carrito:', error);
        });
}

  function removeCarrito(id) {
    fetch('http://0.0.0.0:8000/src/Carrito.php?operation=remove&id=' + id)
        .then(response => {
            if (response.ok) {
                console.log(id);
            }
        })
  }

  function killCarrito(id) {
    fetch('http://0.0.0.0:8000/src/Carrito.php?operation=kill&id=' + id)
        .then(response => {
            if (response.ok) {
                console.log(id);
            }
        })
  }

  let totalFinal = 0;

  if (!datosCarrito || !datosCarrito.carrito || datosCarrito.carrito.length === 0) {
    return <h2 className='carritoVacio'>Carrito Vacio</h2>;
  } else {
    return (
      <>
        {datosCarrito.carrito.map((producto, index) => {
          const precioTotal = producto.cantidad * parseFloat(producto.precio.replace('€', ''));
          totalFinal += precioTotal;
          return (
            <div key={index} className='juegosCarrito'>
              <div className="productoCarrito">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="contenidoCarrito">
                  <h2>{producto.nombre}</h2>
                  <h3 className="precioCarrito">Cantidad: {producto.cantidad}</h3>
                  <h3 className="precioCarrito">Precio: {producto.precio}</h3>
                  <h3 className="precioCarrito">Total: {precioTotal.toFixed(2)}€</h3>
                </div>
                <div className='botones'>
                  <div className='botonesSimbolos'>
                    <Button class='simbolos' texto='-' accion={() => removeCarrito(producto.id)}/>
                    <Button class='simbolos' texto='+' accion={() => addCarrito(producto.id)}/>
                  </div>
                  <Button class='eliminar' texto='Eliminar del carrito' accion={() => killCarrito(producto.id)}/>
                </div>
              </div>
            </div>
          );
        })}
        <h1 className='total'>Total: {totalFinal.toFixed(2)}€</h1>
        </>
    );
  }
};

export default ProductosCarrito;
