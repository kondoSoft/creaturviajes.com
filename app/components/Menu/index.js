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
         PuntoVenta,
         Banderas,
         ButtonNavBar,
         ButtonNavBarWhite,
         IconNavBar,
         Logo
       } from './styled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import iconTelefono from '../../assets/ImagenesPruebaNuevoDiseniov2/telefono.svg';
import flagUSD from '../../assets/currenciesFlags/usd.svg';
import flagEUR from '../../assets/currenciesFlags/eur.svg';
import flagCAD from '../../assets/currenciesFlags/cad.svg';
import flagGBR from '../../assets/currenciesFlags/gbr.svg';
import flagJPY from '../../assets/currenciesFlags/jpy.svg';

function Menu() {
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
    var seccionTipoDeCambio = document.getElementById('seccionTipoDeCambio')
    var seccionPuntosVenta = document.getElementById('seccionPuntosVenta')

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

      if (seccionPuntosVenta.classList.contains('abierto')) {
        seccionPuntosVenta.classList.remove('abierto')
        seccionPuntosVenta.classList.add('cerrado')
      }else if(seccionTipoDeCambio.classList.contains('abierto')){
        seccionTipoDeCambio.classList.remove('abierto')
        seccionTipoDeCambio.classList.add('cerrado')
      }

      if (mq1920.matches) {

        imgLogoCreatur.style.width = '180px'

      }else if(mq1600.matches){

        imgLogoCreatur.style.width = '180px'

      }else if(mq1440.matches){

        imgLogoCreatur.style.width = '180px'

      }else if(mq1280.matches){

        imgLogoCreatur.style.width = '180px'

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

  function mostrar(idSeccion) {
      var seccion = document.getElementById(idSeccion)
      var seccionTipoDeCambio = document.getElementById('seccionTipoDeCambio')
      var seccionPuntosVenta = document.getElementById('seccionPuntosVenta')
      var iconoTipoCambio = document.getElementById('iconoDinero')
      var iconoPuntosVentas = document.getElementById('iconoLocalizacion')

      if (seccion.classList.contains('cerrado-sin') || seccion.classList.contains('cerrado')) {
        
        if (seccionPuntosVenta.classList.contains('abierto')) {

          seccionPuntosVenta.classList.remove('abierto')
          seccionPuntosVenta.classList.add('cerrado')

        }else if(seccionTipoDeCambio.classList.contains('abierto')){

          seccionTipoDeCambio.classList.remove('abierto')
          seccionTipoDeCambio.classList.add('cerrado')
          
        }
        
        seccion.classList.remove('cerrado-sin')
        seccion.classList.remove('cerrado')
        seccion.classList.add('abierto')
      }else{
        seccion.classList.remove('cerrado-sin')
        seccion.classList.remove('abierto')
        seccion.classList.add('cerrado')

      }

  }

  function SamplePrevArrow(props) {
    const {className, onClick} = props
    return (
      <div className={className} onClick={onClick}>
        <div className='flechaIzquierda'></div>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const {className, onClick} = props
    return (
      <div className={className} onClick={onClick}>
        <div className='flechaDerecha'></div>
      </div>
    );
  }

  const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
  };
  return (
          <ContenedorMenu id="navbar">
            <NavbarBlue id="azul">
                <ButtonNavBar blue displayNone id='ocultar4'>
                  <IconNavBar src={iconTelefono} alt="Icono Tipo de Cambio" />
                  (55) 5545 6769
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar1' onClick={() => mostrar('seccionTipoDeCambio')}>
                  <IconNavBar id='iconoDinero' src={iconDinero} alt="Icono Tipo de Cambio" />
                  Tipo de Cambio
                </ButtonNavBar>
                <ButtonNavBar blue id='ocultar2' onClick={() => mostrar('seccionPuntosVenta')}>
                  <IconNavBar id='iconoLocalizacion' src={iconLocalizacion} alt="Icono Puntos de Venta" />
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
            <SeccionOculta id='seccionTipoDeCambio' className='cerrado-sin'>
              <div id='tipoCambio'>
                <h4>TIPO DE CAMBIO DEL DÍA</h4>
                <Banderas src={flagUSD} alt="USD" /><label>USD $19.20</label>
                <Banderas src={flagEUR} alt="EUR" /><label>EUR $22.70</label>
                <Banderas src={flagCAD} alt="CAD" /><label>CAD $15.40</label>
                <Banderas src={flagGBR} alt="GBR" /><label>GBP $25.50</label>
                <Banderas src={flagJPY} alt="JPY" jpy /><label>JPY $5.99</label>
              </div>
            </SeccionOculta>
            <SeccionOculta id='seccionPuntosVenta' className='cerrado-sin'>
                <div id='puntoVenta'>
                  <Slider {...settings}>
                      <div>
                        <PuntoVenta>
                          <h4>CD. DE MÉXICO</h4>
                          <p>Tel. <a href='tel:+525555456769' target='_blank' >(55) 5545 6769</a></p>
                          <p>Montecito No. 38 WTC Piso 2</p>
                          <p>Oficina 10B Col. Napoles</p>
                        </PuntoVenta>
                      </div>
                      <div>
                        <PuntoVenta>
                          <h4>VILLAHERMOSA</h4>
                          <p>Tel. <a href='tel:+529933109900' target='_blank'> (993) 310 9900</a></p>
                          <p>Paseo Tabasco No. 1404</p>
                          <p>Col. Tabasco 2000</p>
                        </PuntoVenta>
                      </div>
                      <div>
                        <PuntoVenta>
                          <h4>MÉRIDA</h4>
                          <p>Tel. <a href='tel:+529993714118' target='_blank'> (999) 371 4118</a></p>
                          <p>Solare Plaza, Local 112PB,</p>
                          <p>Calle 49 No. 230 x 26 y 28</p>
                        </PuntoVenta>
                      </div>
                      <div>
                        <PuntoVenta>
                          <h4>CD. DEL CARMEN</h4>
                          <p>Tel. <a href='tel:+529383842298' target='_blank'> (938) 384 2298</a></p>
                          <p>Plaza Soriana Local 40 y 41</p>
                          <p>Col. Aviación</p>
                        </PuntoVenta>
                      </div>
                      <div>
                        <PuntoVenta>
                          <h4>COATZACOALCOS</h4>
                          <p>Tel. <a href='tel:+529212183644' target='_blank'> (921) 218 3644</a></p>
                          <p>Plaza Quadrum Local 5A</p>
                          <p>Col. Santa Rosa</p>
                        </PuntoVenta>
                      </div>
                  </Slider>
                </div>
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

Menu.propTypes = {

};

export default Menu;
