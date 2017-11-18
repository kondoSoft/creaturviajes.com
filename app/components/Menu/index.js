/**
*
* Menu
*
*/

import React from 'react';
import { ContenedorMenu,
         NavbarBlue,
         NavbarWhite,
         SeccionOculta,
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
  function mostrarTipoCambio(e) {
      e.preventDefault()
      var seccionTipoDeCambio = document.getElementById("seccionTipoDeCambio")
      seccionTipoDeCambio.classList.toggle('open')
      // if (seccionTipoDeCambio.style.display === '' || seccionTipoDeCambio.style.display === 'none') {
      //   seccionTipoDeCambio.style.display = 'flex'
      // }else{
      //   seccionTipoDeCambio.style.display = 'none'
      // }
  }

  function mostrarPuntosVentas(e) {
      e.preventDefault()
      var seccionPuntosVenta = document.getElementById("seccionPuntosVenta")
      
      if (seccionPuntosVenta.style.display === '' || seccionPuntosVenta.style.display === 'none') {
        seccionPuntosVenta.style.display = 'flex'
      }else{
        seccionPuntosVenta.style.display = 'none'
      }
  }
  return (
          <ContenedorMenu id="navbar">
            <NavbarBlue id="azul">
                <ButtonNavBar blue displayNone id='ocultar4'>
                  <IconNavBar src={iconTelefono} alt="Icono Tipo de Cambio" />
                  (55) 5545 6769
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar1' onClick={mostrarTipoCambio}>
                  <IconNavBar src={iconDinero} alt="Icono Tipo de Cambio" />
                  Tipo de Cambio
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar2' onClick={mostrarPuntosVentas}>
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
            <SeccionOculta id='seccionTipoDeCambio' className='oculta'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </SeccionOculta>
            <SeccionOculta id='seccionPuntosVenta' className='oculta'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </SeccionOculta>
            <NavbarWhite>
              <Logo logo id="espacioLogoCreatur">
                <IconNavBar id="LogoCreatur" logo src={logoCreatur} alt="Logo Creatur" />
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
  var logoEspacio = document.getElementById('espacioLogoCreatur')
  var imgLogoCreatur = document.getElementById('LogoCreatur')
  var azul = document.getElementById('azul')

  var mq480   = window.matchMedia('screen and (max-width: 480px)')
  var mq600   = window.matchMedia('screen and (max-width: 600px) and (min-width: 481px)')
  var mq840   = window.matchMedia('screen and (max-width: 840px) and (min-width: 601px)')
  var mq960   = window.matchMedia('screen and (max-width: 960px) and (min-width: 841px)')
  var mq1280  = window.matchMedia('screen and (max-width: 1280px) and (min-width: 961px)')
  var mq1440  = window.matchMedia('screen and (max-width: 1440px) and (min-width: 1281px)')
  var mq1600  = window.matchMedia('screen and (max-width: 1600px) and (min-width: 1441px)')
  var mq1920  = window.matchMedia('screen and (max-width: 1920px) and (min-width: 1601px)')

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    menu1.style.display = 'none'
    menu2.style.display = 'none'
    menu3.style.display = 'none'
    menu4.style.display = 'initial'
    logoEspacio.style.padding = '0'
    azul.style.paddingTop = '0'
    azul.style.paddingBottom = '0'

    if (mq1920.matches) {

      imgLogoCreatur.style.width = '200px'
      imgLogoCreatur.style.height = '45px'

    }else if(mq1600.matches){

      imgLogoCreatur.style.width = '200px'
      imgLogoCreatur.style.height = '45px'

    }else if(mq1440.matches){

      imgLogoCreatur.style.width = '200px'
      imgLogoCreatur.style.height = '45px'

    }else if(mq1280.matches){

      imgLogoCreatur.style.width = '200px'
      imgLogoCreatur.style.height = '45px'

    }else if(mq960.matches){

      console.log('===================mq960====================')

    }

  }else{

    menu1.style.display = ''
    menu2.style.display = ''
    menu3.style.display = ''
    menu4.style.display = 'none'
    logoEspacio.style.padding = ''
    imgLogoCreatur.style.width = ''
    imgLogoCreatur.style.height = ''
    azul.style.paddingTop = ''
    azul.style.paddingBottom = ''

  }
}

Menu.propTypes = {

};

export default Menu;
