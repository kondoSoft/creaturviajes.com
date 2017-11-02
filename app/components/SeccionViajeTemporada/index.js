/**
*
* SeccionViajeTemporada
*
*/

import React from 'react';
import Card from '../Card';
import { DivTemporada } from './styled'
import Temporada1 from '../../assets/ImagenesPruebaNuevoDiseniov2/temporada1.jpg';
import Temporada2 from '../../assets/ImagenesPruebaNuevoDiseniov2/temporada2.jpg';
import Temporada3 from '../../assets/ImagenesPruebaNuevoDiseniov2/temporada3.jpg';



function SeccionViajeTemporada() {
  return (
  		<DivTemporada>
	  	   	<Card ImgCard={Temporada1} TituloCard='PERÚ FIN DE AÑO' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	  	   	<Card ImgCard={Temporada2} TituloCard='WHISTLER' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	  	   	<Card ImgCard={Temporada3} TituloCard='NUEVA YORK ESPECIAL' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
  	   </DivTemporada>
  );
}

SeccionViajeTemporada.propTypes = {

};

export default SeccionViajeTemporada;
