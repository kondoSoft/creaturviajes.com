/**
*
* Menu
*
*/

import React from 'react';
import { NavbarBlue,
         NavbarWhite,
         ButtonNavBar,
         ButtonNavBarWhite,
         IconNavBar,
         Logo
       } from './styled';
import iconBusqueda from './icons/busqueda.svg';
import iconCorreo from './icons/correo.svg';
import iconDinero from './icons/dinero.svg';
import iconFacebook from './icons/facebook.svg';
import iconGooglePlus from './icons/googleplus.svg';
import iconInstagram from './icons/instagram.svg';
import iconLocalizacion from './icons/localizacion.svg';
import iconUsuario from './icons/usuario.svg';
import iconYoutube from './icons/youtube.svg';
import logoCreatur from '!file-loader!./icons/Logo_Creatur_Viajes.png';

function Menu() {
  return (
          <div>
            <NavbarBlue>
                <ButtonNavBar blue>
                  <IconNavBar src={iconDinero} alt="Icono Tipo de Cambio" />
                  Dolar $21 Euro$20
                </ButtonNavBar>
                <ButtonNavBar blue>
                  <IconNavBar src={iconLocalizacion} alt="Icono Puntos de Venta" />
                  Puntos de Venta
                </ButtonNavBar>
                <ButtonNavBar blue>
                  <IconNavBar src={iconBusqueda} alt="Icono Busqueda" />
                  Buscar
                </ButtonNavBar>
                <ButtonNavBar blue>
                  <IconNavBar src={iconCorreo} alt="Icono Correo" />
                  Contacto
                </ButtonNavBar>
                <ButtonNavBar blue>
                  <IconNavBar src={iconUsuario} alt="Icono Iniciar Sesión" />
                  Iniciar Sesión
                </ButtonNavBar>
            </NavbarBlue>
            <NavbarWhite>
              <Logo logo>
                <IconNavBar logo src={logoCreatur} alt="Logo Creatur" />
              </Logo>
              <ButtonNavBarWhite>
                DESTINOS
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                VIAJES DE MIEL 
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                CRUCEROS
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                VIAJES DE 15
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                ESTUDIOS
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                GRUPOS
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                OFERTAS
              </ButtonNavBarWhite>
              <ButtonNavBarWhite>
                CREA TU VIAJE
              </ButtonNavBarWhite>
            </NavbarWhite>
          </div>
  );
}

Menu.propTypes = {

};

export default Menu;
