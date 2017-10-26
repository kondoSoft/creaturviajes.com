/**
*
* SeccionOportunidades
*
*/

import React from 'react';
import Card from '../Card';
import { DivOportunidades } from './styled'
import Crucero from '../../assets/ImagenesPruebaNuevoDiseniov2/crucero.jpg';
import Temporada2 from '../../assets/ImagenesPruebaNuevoDiseniov2/temporada2.jpg';
import Oportunidad3 from '../../assets/ImagenesPruebaNuevoDiseniov2/oportunidad3.jpg';

function SeccionOportunidades() {
  return (
 	<DivOportunidades>
    	<Card ImgCard={Crucero} BotonMedio TextoBoton='Oferta' TituloCard='MES DEL CRUCERO' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    	<Card ImgCard={Temporada2} BotonMedio TextoBoton='Fin de año' TituloCard='WHISTLER' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    	<Card ImgCard={Oportunidad3} BotonMedio TextoBoton='Nuevo' TituloCard='SINGAPUR Y MYANMAR' TextoCuerpo='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    </DivOportunidades>
  );
}

SeccionOportunidades.propTypes = {

};

export default SeccionOportunidades;
