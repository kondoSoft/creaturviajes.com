/**
*
* BuscadorCreaTuViaje
*
*/

import React from 'react';
import {
		CreaturBuscador,
		SeccionIzquierda,
		SeccionDestinos,
		SeccionPaises,
		SeccionTiposDeViaje,
		SeccionFechasPresupuesto,
		SeccionBotones,
		BotonBuscadorAzul,
		BotonBuscadorNaranja	
		} from './styled.js'

function BuscadorCreaTuViaje() {
  return (
  	<CreaturBuscador>
	  	<SeccionIzquierda>
	  		<SeccionDestinos>
	  		</SeccionDestinos>
	  		<SeccionPaises>
	  		</SeccionPaises>
	  	</SeccionIzquierda>
	  	<SeccionTiposDeViaje>
	  	</SeccionTiposDeViaje>
	  	<SeccionFechasPresupuesto>
	  	</SeccionFechasPresupuesto>
	  	<SeccionBotones>
	  		<BotonBuscadorAzul>Ver opciones</BotonBuscadorAzul>
	  		<BotonBuscadorNaranja>Nueva búsqueda</BotonBuscadorNaranja>
	  	</SeccionBotones>
	</CreaturBuscador>
  );
}

BuscadorCreaTuViaje.propTypes = {

};

export default BuscadorCreaTuViaje;
