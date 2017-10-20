/**
*
* TituloSecciones
*
*/

import React from 'react';
import {SeccionTitulo, Titulo} from './styled.js';

function TituloSecciones(props) {
  return (
  	<SeccionTitulo Color={props.Color}>
  		<Titulo>{props.Text}</Titulo>
  	</SeccionTitulo>
  );
}

TituloSecciones.propTypes = {

};

export default TituloSecciones;
