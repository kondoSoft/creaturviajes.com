/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';


class Calendario extends React.Component {

  render(props){

    const meses = [
                    'Ene', 'Feb', 'Mar',
                    'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep',
                    'Oct', 'Nov', 'Dic'
                  ]
    const date = new Date()
    const AnioActual = date.getFullYear()
    let Anio = date.getFullYear()
    const limiteSuperiorAnio = AnioActual + this.props.limiteSuperior || AnioActual
    const limiteInferiorAnio = AnioActual - this.props.limiteInferior || AnioActual

  function cambio(msj){
    var Titulo = document.getElementById('anio')

    if (msj === 'Izquierda') {
      if (Anio <= limiteInferiorAnio) {
        Anio
      }else{
        Anio = Anio - 1
      }

    }else if(msj === 'Derecha'){
      if (Anio < limiteSuperiorAnio) {
        Anio = Anio + 1
      }else{
        Anio
      }

    }

    console.log(Anio)
    Titulo.innerHTML = Anio
  }
	return (
		<DivCalendario>
        <div className='Main'>
          <div className='Header'>
            <div id='FlechaIzquierda' onClick={() => cambio('Izquierda')}>
              <div className='FlechaIzq' ></div>
            </div>
            <div id='anio' className='Titulo'>{Anio}</div>
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
