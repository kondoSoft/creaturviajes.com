/**
*
* Menu
*
*/

import React from 'react';
import { NavbarBlue, ButtonNavBar, IconNavBar } from './styled';
import iconBusqueda from './icons/busqueda.svg';
import iconCorreo from './icons/correo.svg';
import iconDinero from './icons/dinero.svg';
import iconFacebook from './icons/facebook.svg';
import iconGooglePlus from './icons/googleplus.svg';
import iconInstagram from './icons/instagram.svg';
import iconLocalizacion from './icons/localizacion.svg';
import iconUsuario from './icons/usuario.svg';
import iconYoutube from './icons/youtube.svg';

function Menu() {
  return (
    <div>
    	<NavbarBlue>
      		<ButtonNavBar>
            <IconNavBar src={iconDinero} alt="" />
            Dolar $21 Euro$20
          </ButtonNavBar>
      		<ButtonNavBar>
            <IconNavBar src={iconLocalizacion} alt="" />
            Puntos de Venta
          </ButtonNavBar>
      		<ButtonNavBar>
            <IconNavBar src={iconBusqueda} alt="" />
            Buscar
          </ButtonNavBar>
      		<ButtonNavBar>
            <IconNavBar src={iconCorreo} alt="" />
            Contacto
          </ButtonNavBar>
      		<ButtonNavBar>
            <IconNavBar src={iconUsuario} alt="" />
            Iniciar Sesión
          </ButtonNavBar>
    	</NavbarBlue>
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
