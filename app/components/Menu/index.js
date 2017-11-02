/**
*
* Menu
*
*/

import React from 'react';
import { ContenedorMenu,
         NavbarBlue,
         NavbarWhite,
         ButtonNavBar,
         ButtonNavBarWhite,
         IconNavBar,
         Logo
       } from './styled';
import iconBusqueda from '../../assets/icons/busqueda.svg';
import iconCorreo from '../../assets/icons/correo.svg';
import iconDinero from '../../assets/icons/dinero.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconGooglePlus from '../../assets/icons/googleplus.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import iconLocalizacion from '../../assets/icons/localizacion.svg';
import iconUsuario from '../../assets/icons/usuario.svg';
import iconYoutube from '../../assets/icons/youtube.svg';
import logoCreatur from '!file-loader!../../assets/icons/Logo_Creatur_Viajes.png';
import iconTelefono from '../../assets/ImagenesPruebaNuevoDiseniov2/telefono.svg'

function Menu() {
  return (
          <ContenedorMenu id="navbar">
            <NavbarBlue>
                <ButtonNavBar blue displayNone id='ocultar4'>
                  <IconNavBar src={iconTelefono} alt="Icono Tipo de Cambio" />
                  (55) 5545 6769
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar1' >
                  <IconNavBar src={iconDinero} alt="Icono Tipo de Cambio" />
                  Dolar $21 Euro$20
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar2'>
                  <IconNavBar src={iconLocalizacion} alt="Icono Puntos de Venta" />
                  Puntos de Venta
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar3'>
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
          </ContenedorMenu>
  );
}


// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var menu1 = document.getElementById('ocultar1')
  var menu2 = document.getElementById('ocultar2')
  var menu3 = document.getElementById('ocultar3')
  var menu4 = document.getElementById('ocultar4')
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "inherit";

  }else{
    menu1.style.display = "inherit";
    menu2.style.display = "inherit";
    menu3.style.display = "inherit";
    menu4.style.display = "none";
  }
} 

Menu.propTypes = {

};

export default Menu;
