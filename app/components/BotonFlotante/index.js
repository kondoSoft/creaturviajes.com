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
    <div>
    	<ButtonWhats src={IconWhats} />
    </div>
  );
}

BotonFlotante.propTypes = {

};

export default BotonFlotante;
