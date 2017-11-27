/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';


class Calendario extends React.Component {

  render(){

    const meses = [
                    'Ene', 'Feb', 'Mar',
                    'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep',
                    'Oct', 'Nov', 'Dic'
                  ]

  function cambio(msj){
    var CalendarioCuerpo = document.getElementsByClassName('Body')

    console.log('================'+msj+'====================')
    console.log(msj)
    console.log(CalendarioCuerpo)
  }
	return (
		<DivCalendario>
        <div className='Main'>
          <div className='Header'>
            <div id='FlechaIzquierda' onClick={() => cambio('Izquierda')}>
              <div className='FlechaIzq' ></div>
            </div>
            <div className='Titulo'>2017</div>
            <div id='FlechaDerecha' onClick={() => cambio('Derecha')}>
              <div className='FlechaDer' ></div>
            </div>
          </div>
          <div className='Body'>
            {
              meses.map(
                (item, i)=>{
                  return(
                    <button className='Mes' key={i}>{item}</button>
                  )
                }
              )
            }
          </div>
          <div className='Body oculto'>
          </div>
        </div>
		</DivCalendario>
	)

  }
}

Calendario.propTypes = {

};

export default Calendario;
