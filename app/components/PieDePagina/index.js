/**
*
* PieDePagina
*
*/

import React from 'react';
import { 
		ContenedorFooter,
		Footer,
		ColumnaPrincipalFooter,
		FilaRedesSociales,
		ColumnaSecundaria,
		LogoFooter,
		EspacioCorreo,
		CorreoFooter,
		TituloColumna,
		SubTitulo,
		SpanNaranja,
		IconosRedesSociales,
		ContenedorFinal,
		UltimaColumna
	} from './styled.js';

import ImgLogo from '!file-loader!../../assets/ImagenesPruebaNuevoDiseniov2/logo_calado.png';
import ImgSocialYt from '../../assets/ImagenesPruebaNuevoDiseniov2/youtube.svg';
import ImgSocialFb from '../../assets/ImagenesPruebaNuevoDiseniov2/facebook.svg';
import ImgSocialGp from '../../assets/ImagenesPruebaNuevoDiseniov2/google_mas.svg';
import ImgSocialIg from '../../assets/ImagenesPruebaNuevoDiseniov2/instagram.svg';
import ImgSocialTw from '../../assets/ImagenesPruebaNuevoDiseniov2/twitter.svg';
import LogoMayorista from '../../assets/ImagenesPruebaNuevoDiseniov2/logo_mayorista.svg';
import Premium from '../../assets/ImagenesPruebaNuevoDiseniov2/paloma.svg';

function PieDePagina() {
  return (
  	<ContenedorFooter>
	    <Footer>
	    	<ColumnaPrincipalFooter>
	    		<LogoFooter src={ImgLogo} alt='Logo Creatur' /> 
		    	<CorreoFooter><SpanNaranja>info</SpanNaranja>@creaturviajes.com</CorreoFooter>
		    	<FilaRedesSociales>
			    	<a href='#'><IconosRedesSociales src={ImgSocialYt} alt=''/></a>
			    	<a href='#'><IconosRedesSociales src={ImgSocialFb} alt=''/></a>
			    	<a href='#'><IconosRedesSociales src={ImgSocialGp} alt=''/></a>
			    	<a href='#'><IconosRedesSociales src={ImgSocialIg} alt=''/></a>
			    	<a href='#'><IconosRedesSociales src={ImgSocialTw} alt=''/></a>
		    	</FilaRedesSociales>
	    	</ColumnaPrincipalFooter>
	    	<ColumnaSecundaria>
	    		<TituloColumna>MENÚ</TituloColumna>
	    		<ul>
	    			<li><a href='#'>DESTINOS</a></li>
	    			<li><a href='#'>VIAJES DE 15</a></li>
	    			<li><a href='#'>OFERTAS</a></li>
	    		</ul>
	    		<ul>
	    			<li><a href='#'>VIAJES DE MIEL</a></li>
	    			<li><a href='#'>ESTUDIOS</a></li>
	    			<li><a href='#'>CREA TU VIAJE</a></li>
	    		</ul>
	    		<ul>
	    			<li><a href='#'>CRUCEROS</a></li>
	    			<li><a href='#'>GRUPOS</a></li>
	    		</ul>
	    	</ColumnaSecundaria>
	    	<UltimaColumna>
	    		<div>
		    		<TituloColumna>Obtén beneficios exclusivos</TituloColumna>
		    		<SubTitulo>Date de alta para recibir promociones y más...</SubTitulo>
		    		<div>
		    			<input type='text' placeholder='Correo electronico'/>
		    			<button>✓</button>
		    		</div>
	    		</div>
	    	</UltimaColumna>
	    </Footer>
	    <ContenedorFinal>
	    	<div>
			    <p>Una empresa de</p>
			    <img src={ LogoMayorista } alt=''/>
		    </div>
		    <div>
		    	<img id='logoPremium' src={ Premium } alt=''/>
		    	<a href='#' id='viajesdelujo' >viajesdelujo.com</a>
		    	<a href='#' id='politicas' >Política de privacidad / Términos y Condiciones </a>
		    </div>
	    </ContenedorFinal>
    </ContenedorFooter>
  );
}

PieDePagina.propTypes = {

};

export default PieDePagina;
