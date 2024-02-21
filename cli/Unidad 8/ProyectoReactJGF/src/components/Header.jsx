import logo from '../assets/logo.png'
import carrito from '../assets/carrito.png'
import '../assets/App.css'

function Header() {

  return (
    <>
      <header>
        <nav>
          <a><img src={logo} alt="Logo Cabecera"/></a>
          <a href="">Inicio</a>
          <a href="">Tienda</a>
          <a href="">Quienes somos</a>
          <a href=""><img src={carrito} alt="Logo Carrito" className='carrito'/></a>
        </nav>
      </header>
    </>
  )
}


export default Header
