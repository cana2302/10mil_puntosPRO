import { useState } from 'react'
import FormInicial from './components/FormInicial';
import dado from './assets/dados_negros.png';

function App() {
  const [menu, setMenu] = useState('inicio'); // (inicio || apodos || jugando || ganador)
  const [cantidadJugadores, setCantidadJugadores] = useState(''); // número de jugadores
  const [error, setError] = useState(''); // mensaje de error

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

  // Función que resetea los todos los estados del componente
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
        <h1>10mil</h1>
        <br />
        <FormInicial cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} error={error} setError={setError} menu2={menu2}/>
        <br />
        <img src={dado} alt="dados" />
      </main>
    )
  } if (menu === 'apodos') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />

        <br />
        <img src={dado} alt="dados" />
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
