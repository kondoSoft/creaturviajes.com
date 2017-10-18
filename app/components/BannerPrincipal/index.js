/**
*
* BannerPrincipal
*
*/

import React from 'react';
import { ImgPrincipal, TituloBanner, ButtonBanner } from './styled.js';
import ImgBannerPrincipal from '../../assets/ImagenesPruebaNuevoDiseniov2/marruecos.jpg';

function BannerPrincipal() {
  return (
    <div>
    	<ImgPrincipal src={ImgBannerPrincipal} alt='Banner Principal'/>
    	<TituloBanner>Descubre Marruecos</TituloBanner>
    	<ButtonBanner>Ir a programa</ButtonBanner>

    </div>
  );
}

BannerPrincipal.propTypes = {

};

export default BannerPrincipal;
