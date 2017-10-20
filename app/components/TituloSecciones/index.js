/**
*
* TituloSecciones
*
*/

import React from 'react';
import {SeccionTitulo, Titulo, LineaTituloSeccion} from './styled.js';

function TituloSecciones(props) {
  return (
  	<SeccionTitulo Color={props.Color}>
  		<LineaTituloSeccion/>
  			<Titulo>{props.Text}</Titulo>
  		<LineaTituloSeccion/>
  	</SeccionTitulo>
  );
}

TituloSecciones.propTypes = {

};

export default TituloSecciones;
