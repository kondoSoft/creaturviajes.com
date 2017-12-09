/**
*
* BotonFlotante
*
*/

import React from 'react';
import { ButtonWhats } from './styled.js';
import IconWhats from '../../assets/ImagenesPruebaNuevoDiseniov2/whatsapp.svg';

function BotonFlotante() {
  return (
  	<ButtonWhats>
  		<img src={IconWhats} />
  	</ButtonWhats>
  );
}

BotonFlotante.propTypes = {

};

export default BotonFlotante;
