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
        <Banner titulo="Sobre nosotros" texto="Aprende un poco sobre nuestra empresa"/>
        <div className='titulo'>
          <h2>Tu vendedor de videojuegos de confianza</h2>
          <p className='textoLargo'>En MemoGames estamos encantados de tenerte, por ello te ofrecemos servicios de calidad para que deposites toda tu confianza en nosotros.</p>
          <p className='textoLargo'>Somos una empresa pequeña pero con mucha ambición. Trabajamos como una familia y es por ellos que somos capaces de ofrecer una gran variedad de productos de calidad al mejor precio.</p>
          <p className='textoLargo'>Te agradecemos que aportes tu confianza en nosotros y esperamos verte todo el tiempo cada vez que quieras encontrar tu videojuego favorito al mejor precio.</p>
        </div>
      </main>
    </>
  );
}

export default QuienesSomos;
