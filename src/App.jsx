import { useState } from 'react'
import FormInicial from './components/FormInicial';
import dado from './assets/vite.png';
// <img src={dado} alt="dados" />

function App() {
  const [menu, setMenu] = useState('inicio');
  const [cantidadJugadores, setCantidadJugadores] = useState('');
  const [error, setError] = useState('');

  //Función que cambia el estado 'menu' -> 'apodos'
  const menu2 = () => {
    setMenu('apodos')
  }

  //Función que cambia el estado 'menu' -> 'jugando'
  const menu3 = () => {
    setMenu('jugando')
  }

    //Función que cambia el estado 'menu' -> 'ganador'
    const menu4 = () => {
      setMenu('ganador')
    }


    const resetGame = () => {
      const confirmacion = window.confirm('¿Estás seguro de resetear?');
      if (confirmacion) {
        setMenu('inicio');
        setCantidadJugadores('');
        setError('');
      }
    }

  //---------------------------------------------

  if (menu === 'inicio') {
    return (
      <main className='pantalla'>
        <div className='encabezado'>
          <h1>Puntos 10mil</h1>
          <img src={dado} alt="dados" />
        </div>
        <FormInicial cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} error={error} setError={setError} menu2={menu2}/>
      </main>
    )
  } if (menu === 'apodos') {
    return (
      <main className='pantalla'>
        <h1>Puntos 10mil</h1>
        <footer>
          <button className='reset' onClick={resetGame}>Reset</button>
        </footer>
      </main>
    )
  } if (menu === 'jugando') {
    return (
      <main className='pantalla'>
        <h1>Puntos 10mil</h1>
      </main>
    )
  } if (menu === 'ganador') {
    return (
      <main className='pantalla'>
        <h1>Puntos 10mil</h1>
      </main>
    )
  }


}

export default App
