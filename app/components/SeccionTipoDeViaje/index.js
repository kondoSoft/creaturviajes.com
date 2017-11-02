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
	  	   	<Card ImgCard={elige1} TituloCard='MES DEL CRUCERO' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' LinkLeerMas />
	  	   	<Card ImgCard={elige2} TituloCard='WHISTLER' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' LinkLeerMas />
	  	   	<Card ImgCard={elige3} TituloCard='SINGAPUR Y MYANMAR' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' LinkLeerMas />
  	   </DivTipoDeViaje>
  );
}

SeccionTipoDeViaje.propTypes = {

};

export default SeccionTipoDeViaje;
