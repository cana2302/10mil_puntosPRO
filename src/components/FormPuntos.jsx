import React, { useState } from 'react';

const FormPuntos = ({ cantidadJugadores, jugadores, setJugadores, menu4 }) => {

  const [currentJugador, setCurrentJugador] = useState(0); // Índice del jugador actual
  const [puntos, setPuntos] = useState(''); // Puntos ingresados
  const numeroJugadores = cantidadJugadores; 

      // Función para pasar el turno al siguiente jugador de forma cíclica
  const pasarTurno = (nuevosJugadores) => {
    nuevosJugadores[currentJugador].turno = false;
    const siguienteJugador = (currentJugador + 1) % numeroJugadores;
    nuevosJugadores[siguienteJugador].turno = true;

    setJugadores(nuevosJugadores);
    setCurrentJugador(siguienteJugador);
  };

  const handleInput = (event) => {
    setPuntos(event.target.value);
  };

  const handlePasarTurno = () => {
    const nuevosJugadores = [...jugadores];
    pasarTurno(nuevosJugadores);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const puntosIngresados = parseInt(puntos, 10);
    if (isNaN(puntosIngresados)) {
      alert('Por favor, ingrese un número válido');
      return;
    }

    const nuevosJugadores = [...jugadores];
    const puntosActuales = nuevosJugadores[currentJugador].puntos;
    const nuevosPuntos = puntosActuales + puntosIngresados;

    if (nuevosPuntos > 10000) {
      pasarTurno(nuevosJugadores);
    } else if (nuevosPuntos === 10000) {
      nuevosJugadores[currentJugador].puntos = nuevosPuntos;
      nuevosJugadores[currentJugador].missing = 0;
      setJugadores(nuevosJugadores);
      menu4(); // Ejecutar la función menu4()
    } else {
      nuevosJugadores[currentJugador].puntos = nuevosPuntos;
      nuevosJugadores[currentJugador].missing = 10000 - nuevosPuntos;
      pasarTurno(nuevosJugadores);
    }

    // Pasar el turno al siguiente jugador de forma cíclica
    pasarTurno(nuevosJugadores);
    setPuntos(''); // Limpiar el input

    console.log('Jugadores actualizados:', nuevosJugadores);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Turno de <strong>{jugadores[currentJugador].apodo}</strong>:
        </label>
        <br />
        <input
          type="number"
          value={puntos}
          onChange={handleInput}
          placeholder="Ingrese puntos"
        />
      </div>

      <div>
        <button type="submit">Enter</button>
      </div>
      <div>
        <button type="button" onClick={handlePasarTurno}>Pasar Turno</button>
      </div>
    </form>
  )

}
export default FormPuntos