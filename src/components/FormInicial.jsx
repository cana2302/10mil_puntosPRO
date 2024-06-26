import React, { useRef, useEffect } from 'react';

const FormInicial = ({ cantidadJugadores, setCantidadJugadores, error, setError, menu2 }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Enfoca el input cuando el componente se monta
    inputRef.current.focus();
  }, []);
  
  const handleInput = (event) => {
    const value = event.target.value;
    //Validar que el núm sea entero positivo
    if (/^\d*$/.test(value)) {
      const number = parseInt(value, 10);
      if (value === '' || (number >= 1 && number <= 12)){
        setCantidadJugadores(value);
        setError('');
      } else {
        setError('El valor debe ser un número entre 1 y 12');
      }
    } else {
      setError('El valor debe ser un número.')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (cantidadJugadores === '' || isNaN(cantidadJugadores)) {
      setError('Por favor ingrese un número.');
    } else {
      const number_ = parseInt(cantidadJugadores, 10);
      if (number_ >= 1 && number_ <= 12) {
        setError('');
        menu2();
        console.log('Valor ingresado:', number_);
        setCantidadJugadores(number_);
      } else {
        setError('El valor debe ser un número entre 1 y 12.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Ingrese cantidad de jugadores</h3>
      </div>
      <div>
        <input type="text" ref={inputRef} onChange={handleInput} placeholder="número" />
      </div>
      <div>
        <button type="submit">Enter</button>
      </div>
      {error && <p style={{ color:'red' }}>{error}</p>}  
    </form>
  )

}
export default FormInicial
