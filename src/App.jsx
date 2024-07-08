import { useState } from 'react';
import FormInicial from './components/FormInicial';
import FormApodos from './components/FormApodos';
import dado from './assets/dados_negros.png';
import TablaPuntos from './components/TablaPuntos';
import FormPuntos from './components/FormPuntos';
import TablaGanador from './components/TablaGanador';
import Ganador from './components/Ganador';

function App() {
  const [menu, setMenu] = useState('inicio'); // (inicio || apodos || jugando || ganador)
  const [cantidadJugadores, setCantidadJugadores] = useState(0); // número de jugadores
  const [jugadores, setJugadores] = useState({});
  const [winner, setWinner] = useState(false);

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
      setJugadores({});
      setWinner(false);
    }
  }

  console.log(jugadores);

  //---------------------------------------------

  if (menu === 'inicio') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <FormInicial cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} menu2={menu2} />
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
        <TablaPuntos jugadores={jugadores} /> 
        <br />
        <FormPuntos cantidadJugadores={cantidadJugadores} jugadores={jugadores} setJugadores={setJugadores} setWinner={setWinner} menu4={menu4} />
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
        <br />
        <TablaGanador jugadores={jugadores} /> 
        <br />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
        {winner && <Ganador jugadores={jugadores} setWinner={setWinner}/>}
    
      </main>
    )
  }


}

export default App
