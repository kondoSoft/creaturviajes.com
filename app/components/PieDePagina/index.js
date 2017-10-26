/**
*
* PieDePagina
*
*/

import React from 'react';
import { 
		Footer,
		ColumnaPrincipalFooter,
		ColumnaSecundaria,
		LogoFooter,
		EspacioCorreo,
		NombreCorreoFooter,
		DominioCorreoFooter
	} from './styled.js';

import ImgLogo from '!file-loader!../../assets/ImagenesPruebaNuevoDiseniov2/logo_calado.png';

function PieDePagina() {
  return (
    <Footer>
    	<ColumnaPrincipalFooter>
    		<LogoFooter src={ImgLogo} alt='Logo Creatur' /> 
    		
    		<EspacioCorreo>
	    		<NombreCorreoFooter>info</NombreCorreoFooter>
	    		<DominioCorreoFooter>@creaturviajes.com</DominioCorreoFooter>
	    	</EspacioCorreo>
    	</ColumnaPrincipalFooter>
    	<ColumnaSecundaria>
    	
    	</ColumnaSecundaria>
    	<ColumnaSecundaria>
    	
    	</ColumnaSecundaria>
    </Footer>
  );
}

PieDePagina.propTypes = {

};

export default PieDePagina;
