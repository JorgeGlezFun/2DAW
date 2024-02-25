import React from 'react';
import '../assets/App.css';

function Button(props) {
  return (
    <button onClick={props.accion}>Añadir al carrito</button>
  );
}

export default Button;
