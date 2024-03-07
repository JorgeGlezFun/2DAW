import '../assets/App.css'

function Banner(props) {

  return (
    <>
        <div className='banner'>
          <h1>{props.titulo}</h1>
          <h3>{props.texto}</h3>
        </div>
    </>
  )
}


export default Banner
