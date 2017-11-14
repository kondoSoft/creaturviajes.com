/**
*
* SeccionTipoDeViaje
*
*/

import React from 'react';
import Card from '../Card';
import { DivTipoDeViaje } from './styled';
import elige1 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige1.jpg';
import elige2 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige2.jpg';
import elige3 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige3.jpg';

function SeccionTipoDeViaje() {
  return (
  		<DivTipoDeViaje>
	  	   	<Card ImgCard={elige1} TituloCard='¿QUÉ SON LOS VIAJES A LA MEDIDA?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas />
	  	   	<Card ImgCard={elige2} TituloCard='¿QUÉ PUEDO ESPERAR DE LOS CIRCUITOS?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas />
	  	   	<Card ImgCard={elige3} TituloCard='¿POR QUÉ VIAJAR EN UN CRUCERO?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas />
  	   </DivTipoDeViaje>
  );
}

SeccionTipoDeViaje.propTypes = {

};

export default SeccionTipoDeViaje;
