import React, { useState } from 'react';

const FormPuntos = ({ cantidadJugadores, jugadores, setJugadores }) => {

  const [currentJugador, setCurrentJugador] = useState(0); // Índice del jugador actual
  const [puntos, setPuntos] = useState(''); // Puntos ingresados
  const numeroJugadores = cantidadJugadores; 

  const handleInput = (event) => {
    setPuntos(event.target.value);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const puntosIngresados = parseInt(puntos, 10);
    if (isNaN(puntosIngresados)) {
      alert('Por favor, ingrese un número válido');
      return;
    }

    // Actualizar los puntos del jugador actual
    const nuevosJugadores = [...jugadores];
    nuevosJugadores[currentJugador].puntos += puntosIngresados;

    // Pasar el turno al siguiente jugador de forma cíclica
    nuevosJugadores[currentJugador].turno = false;
    const siguienteJugador = (currentJugador + 1) % numeroJugadores;
    nuevosJugadores[siguienteJugador].turno = true;

    setJugadores(nuevosJugadores);
    setCurrentJugador(siguienteJugador);
    setPuntos(''); // Limpiar el input

    console.log('Jugadores actualizados:', nuevosJugadores);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          {`Turno de ${jugadores[currentJugador].apodo}:`}
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
    </form>
  )

}
export default FormPuntos