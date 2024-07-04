const TablaPuntos = ({ jugadores }) => {

  const jugadoresInfo = [...jugadores];

  const posicion = (_x) => {
    if (_x === 0) {
      return ('1° ');
    }
    return null;
  };

  const tableStyle = {
    width: '400px',
    borderCollapse: 'collapse',
    textAlign: 'center',
    padding: '8px'
  };

  return (
    <div className='tabla_puntos'>
      <table style={tableStyle}>
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
      </table>
    </div>
  )

}
export default TablaPuntos