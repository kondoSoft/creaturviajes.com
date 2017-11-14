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
	    	<Card ImgCard={Vendidos1} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='PERÚ' Premium TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    	<Card ImgCard={Vendidos2} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='WHISTLER' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    	<Card ImgCard={Vendidos3} BotonCabecera TextoBotonCabecera='Fin de año' TituloCard='NUEVA YORK' Premium TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    </DivMasVendido>
	    <DivMasVendido>
	    	<Card ImgCard={Vendidos4} BotonCabecera TextoBotonCabecera='Semana Santa' TituloCard='CUBA' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    	<Card ImgCard={Vendidos5} BotonCabecera TextoBotonCabecera='Semana Santa' TituloCard='MARRUECOS Y TOSCANA' Premium TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    	<Card ImgCard={Vendidos6} BotonCabecera TextoBotonCabecera='Verano' TituloCard='ORLANDO' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' />
	    </DivMasVendido>
    </div>
  );
}

SeccionMasVendido.propTypes = {

};

export default SeccionMasVendido;
