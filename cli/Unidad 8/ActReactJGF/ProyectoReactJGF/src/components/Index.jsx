import React from 'react';
import Banner from './Banner.jsx';
import Productos from './Productos.jsx';
import datos from '../datos.json';
import '../assets/App.css';

function Index() {
  const masVendidos = datos.juegos.slice(0, 5);

  return (
    <>
      <main>
        <Banner titulo="Bienvenidos a MemoGames" texto="Tu tienda de videojuegos favorita"/>
        <div className='titulo'>
          <h2>Algunos de nuestros juegos mas vendidos: </h2>
          <Productos productos={masVendidos} />
        </div>
      </main>
    </>
  );
}

export default Index;
