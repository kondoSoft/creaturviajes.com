/**
*
* Menu
*
*/

import React from 'react';
import { Navbar, ButtonNavBar, iconNavBar } from './styled';
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
      		<ButtonNavBar><iconNavBar src={iconDinero} alt=""></iconNavBar>Dolar $21 Euro$20</ButtonNavBar>
      		<ButtonNavBar><iconNavBar src={iconLocalizacion} alt=""></iconNavBar>Puntos de Venta</ButtonNavBar>
      		<ButtonNavBar><iconNavBar src={iconBusqueda} alt=""></iconNavBar>Buscar</ButtonNavBar>
      		<ButtonNavBar><iconNavBar src={iconCorreo} alt=""></iconNavBar>Contacto</ButtonNavBar>
      		<ButtonNavBar><iconNavBar src={iconUsuario} alt=""></iconNavBar>Iniciar Sesión</ButtonNavBar>
    	</Navbar>
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
