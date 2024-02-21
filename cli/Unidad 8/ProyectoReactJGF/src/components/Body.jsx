import logo from '../assets/logo.png'
import '../assets/App.css'

function Body() {

  return (
    <>
      <main>
        <nav>
          <a><img src={logo} alt="Logo Cabecera"></img></a>
          <a href="">Inicio</a>
          <a href="">Tienda</a>
          <a href="">Quienes somos</a>
        </nav>
      </main>
    </>
  )
}


export default Body
