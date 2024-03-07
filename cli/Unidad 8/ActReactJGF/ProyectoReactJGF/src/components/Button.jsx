import React from 'react';
import '../assets/App.css';

function Button(props) {
  return (
    <button className={props.class} onClick={props.accion}>{props.texto}</button>
  );
}

export default Button;
