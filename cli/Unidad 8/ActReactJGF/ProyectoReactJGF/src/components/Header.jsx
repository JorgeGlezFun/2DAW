import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import { Link } from 'react-router-dom';
import "../assets/App.css"

function Header() {

  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo"><img src={logo} alt="Logo Cabecera"/> <h2>MEMOGAMES</h2></Link>
          <Link to="/" className="azul">Inicio</Link>
          <Link to="/Tienda" className="rojo">Tienda</Link>
          <Link to="/QuienesSomos" className="amarillo">Quienes somos</Link>
          <Link to="/Cart" className="carrito"><img src={carrito} alt="Logo Carrito"/></Link>
        </nav>
      </header>
    </>
  )
}


export default Header
