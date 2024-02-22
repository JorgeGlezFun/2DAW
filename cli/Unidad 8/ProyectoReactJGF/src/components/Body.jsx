import juego1 from '../assets/juego1.jpg'
import '../assets/App.css'

function Body() {

  return (
    <>
      <main>
        <div className='banner'>
          <h1>¡Bienvenido a MemoGames!</h1>
          <h3>Tu tienda de videojuegos favorita</h3>
        </div>
        <div>
          <h2>Algunos de nuestros juegos mas vendidos: </h2>
          <div className='juegos'>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h2>Jak & Daxter</h2>
                  <p>Embarcate en una increible aventura con este dúo icónico de Playstation</p>
                  <p className="precio">20.99€</p>
                </div>
              <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h2>Jak & Daxter</h2>
                  <p>Embarcate en una increible aventura con este dúo icónico de Playstation</p>
                  <p className="precio">20.99€</p>
                </div>
                  <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h2>Jak & Daxter</h2>
                  <p>Embarcate en una increible aventura con este dúo icónico de Playstation</p>
                  <p className="precio">20.99€</p>
                </div>
                <button>Añadir al carrito</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export default Body
