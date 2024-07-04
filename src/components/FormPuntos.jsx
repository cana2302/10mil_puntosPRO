import React, { useState } from 'react';

const FormPuntos = ({ cantidadJugadores, jugadores, setJugadores }) => {

  const numeroJugadores = cantidadJugadores;

  const jugadoresInfo = [...jugadores];

  // Función de comparación para ordenar de mayor a menor por 'puntos'
  jugadoresInfo.sort((a, b) => b.puntos - a.puntos);


  // Actualizar la propiedad 'turno' del primer elemento
  jugadoresInfo[0].turno = true;
  // Actualiza el estado general de los jugadores con el turno
  

  

  const handleInput = () => {
    
  }

  // Función para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Turno: {jugadores[0].apodo}</p>
      </div>

      <div>
        <input type='text' onChange={(event) => handleInput()}/>
      </div>

      <div>
        <button type="submit">Enter</button>
      </div>
    </form>
  )

}
export default FormPuntos