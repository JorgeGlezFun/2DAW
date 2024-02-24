import juego1 from '../assets/juego1.jpg'
import juego2 from '../assets/juego2.jpg'
import '../assets/App.css'

function Body() {

  return (
    <>
      <main>
        <div className='banner'>
          <h1>¡Bienvenido a MemoGames!</h1>
          <h3>Tu tienda de videojuegos favorita</h3>
        </div>
        <div className='titulo'>
          <h2>Algunos de nuestros juegos mas vendidos: </h2>
          <div className='juegos'>
            <div class="producto">
              <img src={juego1} alt="Jak&Daxter"/>
                <div className="contenido">
                  <h3>Jak & Daxter</h3>
                  <p className="precio">Desde tan solo <span>9.99€</span></p>
                </div>
              <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego2} alt="Project Zomboid"/>
                <div className="contenido">
                  <h3>Project Zomboid</h3>
                  <p className="precio">Desde tan solo <span>10.99€</span></p>
                </div>
                <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h3>Jak & Daxter</h3>
                  <p className="precio">Desde tan solo <span>20.99€</span></p>
                </div>
                <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h3>Jak & Daxter</h3>
                  <p className="precio">Desde tan solo <span>20.99 €</span></p>
                </div>
                <button>Añadir al carrito</button>
            </div>
            <div class="producto">
              <img src={juego1} alt="Nombre del Producto"/>
                <div className="contenido">
                  <h3>Jak & Daxter</h3>
                  <p className="precio">Desde tan solo <span>20.99€</span></p>
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
