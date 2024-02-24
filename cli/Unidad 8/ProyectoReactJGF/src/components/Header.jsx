import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import "../assets/App.css"

function Header() {

  return (
    <>
      <header>
        <nav>
          <a href="" className="logo"><img src={logo} alt="Logo Cabecera"/> <h2>MEMOGAMES</h2></a>
          <a href="" className="azul">Inicio</a>
          <a href="" className="rojo">Tienda</a>
          <a href="" className="amarillo">Quienes somos</a>
          <a href="" className="carrito"><img src={carrito} alt="Logo Carrito"/></a>
        </nav>
      </header>
    </>
  )
}


export default Header
