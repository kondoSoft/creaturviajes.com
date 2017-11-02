/**
*
* BannerPrincipal
*
*/

import React from 'react';
import { 
	ImgPrincipal,
	TituloBanner,
	ButtonBanner,
	ContenedorBanner
	} from './styled.js';
import ImgBannerPrincipal from '../../assets/ImagenesPruebaNuevoDiseniov2/marruecos.jpg';

function BannerPrincipal() {
  return (
    <ContenedorBanner>
    	<ImgPrincipal src={ImgBannerPrincipal} alt='Banner Principal'/>
    	<TituloBanner>Descubre Marruecos</TituloBanner>
    	<ButtonBanner>Ir a programa</ButtonBanner>
    </ContenedorBanner>
  );
}

BannerPrincipal.propTypes = {

};

export default BannerPrincipal;
