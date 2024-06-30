import { useState } from 'react';
import FormInicial from './components/FormInicial';
import FormApodos from './components/FormApodos';
import dado from './assets/dados_negros.png';

function App() {
  const [menu, setMenu] = useState('inicio'); // (inicio || apodos || jugando || ganador)
  const [cantidadJugadores, setCantidadJugadores] = useState(''); // número de jugadores
  const [jugadores, setJugadores] = useState({});

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
    }
  }

  console.log(jugadores);

  //---------------------------------------------

  if (menu === 'inicio') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <FormInicial cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} menu2={menu2}/>
        <br />
        <img src={dado} alt="dados" />
      </main>
    )
  } if (menu === 'apodos') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <FormApodos cantidadJugadores={cantidadJugadores} setJugadores={setJugadores} menu3={menu3} />
        <br />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </main>
    )
  } if (menu === 'jugando') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <></> 
        <br />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </main>
    )
  } if (menu === 'ganador') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
      </main>
    )
  }


}

export default App
