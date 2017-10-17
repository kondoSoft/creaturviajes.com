/**
*
* Menu
*
*/

import React from 'react';
import { Navbar, ButtonNavBar, IconNavBar } from './styled';
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
    	<Navbar>
      		<ButtonNavBar><IconNavBar src={iconDinero} alt=""></IconNavBar>Dolar $21 Euro$20</ButtonNavBar>
      		<ButtonNavBar><IconNavBar src={iconLocalizacion} alt=""></IconNavBar>Puntos de Venta</ButtonNavBar>
      		<ButtonNavBar><IconNavBar src={iconBusqueda} alt=""></IconNavBar>Buscar</ButtonNavBar>
      		<ButtonNavBar><IconNavBar src={iconCorreo} alt=""></IconNavBar>Contacto</ButtonNavBar>
      		<ButtonNavBar><IconNavBar src={iconUsuario} alt=""></IconNavBar>Iniciar Sesión</ButtonNavBar>
    	</Navbar>
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
