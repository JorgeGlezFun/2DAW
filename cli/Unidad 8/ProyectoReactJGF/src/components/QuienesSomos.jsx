import React from 'react';
import Banner from './Banner.jsx';
import Productos from './Productos.jsx';
import datos from '../datos.json';
import '../assets/App.css';

function QuienesSomos() {
  const masVendidos = datos.juegos.slice(0, 5);

  return (
    <>
      <main>
        <Banner />
        <div className='titulo'>
          <h2>Algunos de nuestros juegos mas vendidos: </h2>
          <Productos productos={masVendidos} />
        </div>
      </main>
    </>
  );
}

export default QuienesSomos;
