import React, { useState } from 'react';

const FormApodos = ({ cantidadJugadores, setJugadores, menu3 }) => {

  const [apodos, setApodos] = useState(Array(cantidadJugadores).fill(''));

  console.log(apodos);

  // Función para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Se crea el objeto Jugadores (con apodo y puntos en 0):
    const nuevosJugadores = apodos.map((apodo, index) => (
      {
      apodo: apodo,
      puntos: 0,
      missing: 10000
      }
      ));

    setJugadores(nuevosJugadores);
    menu3();
  };

  const handleInput = (index, event) => {
    const value = event.target.value;
    const nuevosApodos = [...apodos];
    nuevosApodos[index] = value;
    setApodos(nuevosApodos);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='apodos'>
        <ul>
          {apodos.map((_, index) => (
            <li key={index}>
              <label>Apodo {(index+1)}: </label>
              <input type='text' value={apodos[index]} onChange={(event) => handleInput(index, event)}/>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button type="submit">Enter</button>
      </div>

    </form>
  )

}
export default FormApodos