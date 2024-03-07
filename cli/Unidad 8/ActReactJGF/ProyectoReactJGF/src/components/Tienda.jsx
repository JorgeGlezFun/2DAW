import Productos from './Productos'
import datos from '../datos.json';
import '../assets/App.css'

function Tienda() {

  return (
    <>
      <main>
        <div className='titulo'>
          <h2>Añade al carrito uno de los juegos de nuestra amplia gama: </h2>
          <Productos productos={datos.juegos} />
        </div>
      </main>
    </>
  )
}


export default Tienda
