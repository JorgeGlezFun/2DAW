import React from 'react';
import datosCarrito from '../datosCarrito.json';
import ProductosCarrito from './ProductosCarrito.jsx';
import '../assets/App.css';

function Cart() {

  return (
    <>
      <main>
        <div className='titulo'>
          <h2> Productos que has añadido al carrito: </h2>
          <ProductosCarrito producto={datosCarrito.carrito}/>
        </div>
      </main>
    </>
  );
}

export default Cart;
