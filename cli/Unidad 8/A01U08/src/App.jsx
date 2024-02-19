import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setcontador] = useState(0)

  return (
    <>
      <h1>A01-U08-Jorge González</h1>
      <div className="card">
        <button onClick={() => setcontador((contador) => contador + 1)}>
          Has clicado: {contador} veces
        </button>
      </div>
    </>
  )
}

export default App
