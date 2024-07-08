const TablaPuntos = ({ jugadores }) => {

  const jugadoresInfo = [...jugadores];

  // Ordenar de mayor a menor por 'puntos'
  jugadoresInfo.sort((a, b) => b.puntos - a.puntos);

  const tableStyle = {
    width: '350px',
    borderCollapse: 'collapse',
    textAlign: 'center',
    padding: '8px',
    border: '2px solid white',
    borderRadius: '10px', /* Puntas redondeadas */
    borderCollapse: 'separate' 
  };

  const cellStyle = {
    textAlign: 'center',
    padding: '6px',
  };

  const thStyle = {
    ...cellStyle,
    width: '15%',
  };

  const thApodoStyle = {
    ...cellStyle,
    width: '35%',
  };

  const thPuntosStyle = {
    ...cellStyle,
    width: '30%',
  };

  const thMissingStyle = {
    ...cellStyle,
    width: '20%',
  };

  return (
    <div className='tabla_puntos'>
      <table style={tableStyle}>
      <thead>
          <tr>
            <th style={thStyle}>Puesto</th>
            <th style={thApodoStyle}>Apodo</th>
            <th style={thPuntosStyle}>Puntos</th>
            <th style={thMissingStyle}>Faltan</th>
          </tr>
        </thead>
        <tbody>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index} className={jugador.turno ? 'highlight' : ''}>
              <td style={thStyle}>{index + 1}°</td>
              <td style={thApodoStyle}>{jugador.apodo}</td>
              <td style={thPuntosStyle}>{jugador.puntos}</td>
              <td style={thMissingStyle}>({jugador.missing})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
export default TablaPuntos

/*
        <td style={{width:'15%', textAlign: 'center'}}>
          <th>Puesto</th>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index}>{index+1}° </tr>
          ))}
        </td>
        <td style={{width:'35%', textAlign: 'center'}}>
          <th>Apodo</th>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index}>{jugador.apodo}</tr>
          ))}
        </td>
        <td style={{width:'30%'}}>
          <th>Puntos</th>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index}>{jugador.puntos}</tr>
          ))}
        </td>
        <td style={{width:'20%'}}>
          <th>Faltan</th>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index}>({jugador.missing})</tr>
          ))}
        </td>

        */