import logo from '../assets/logo.png'
import carrito from '../assets/carrito.png'
import '../assets/App.css'

function Header() {

  return (
    <>
      <header>
        <nav>
          <a className="logo"><img src={logo} alt="Logo Cabecera"/></a>
          <a href="">Inicio</a>
          <a href="">Tienda</a>
          <a href="">Quienes somos</a>
          <a href="" className='carrito'><img src={carrito} alt="Logo Carrito"/></a>
        </nav>
      </header>
    </>
  )
}


export default Header
