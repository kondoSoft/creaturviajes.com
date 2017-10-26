/**
*
* SeccionMasVendido
*
*/

import React from 'react';
import Card from '../Card';
import { DivMasVendido } from './styled'
import Vendidos1 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos1.jpg';
import Vendidos2 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos2.jpg';
import Vendidos3 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos3.jpg';
import Vendidos4 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos4.jpg';
import Vendidos5 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos5.jpg';
import Vendidos6 from '../../assets/ImagenesPruebaNuevoDiseniov2/vendidos6.jpg';

function SeccionMasVendido() {
  return (
  	<div>
	    <DivMasVendido>
	    	<Card ImgCard={Vendidos1} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='PERÚ' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    	<Card ImgCard={Vendidos2} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='WHISTLER' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    	<Card ImgCard={Vendidos3} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='NUEVA YORK' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    </DivMasVendido>
	    <DivMasVendido>
	    	<Card ImgCard={Vendidos4} BotonCabecera TextoBotonCabecera='Semana Santa' TituloCard='CUBA' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    	<Card ImgCard={Vendidos5} BotonCabecera TextoBotonCabecera='Semana Santa' TituloCard='MARRUECOS Y TOSCANA' Premium TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    	<Card ImgCard={Vendidos6} BotonCabecera TextoBotonCabecera='Semana Santa' TituloCard='ORLANDO' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
	    </DivMasVendido>
    </div>
  );
}

SeccionMasVendido.propTypes = {

};

export default SeccionMasVendido;
