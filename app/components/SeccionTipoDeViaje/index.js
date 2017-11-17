/**
*
* SeccionTipoDeViaje
*
*/

import React from 'react';
import Card from '../Card';
import { DivTipoDeViaje } from './styled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elige1 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige1.jpg';
import elige2 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige2.jpg';
import elige3 from '../../assets/ImagenesPruebaNuevoDiseniov2/elige3.jpg';

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

function SeccionTipoDeViaje() {
	const settings = {
	      infinite: true,
	      speed: 500,
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      nextArrow: <SampleNextArrow />,
	      prevArrow: <SamplePrevArrow />
	};
  return (
  		<DivTipoDeViaje>
  			<Slider {...settings}>
	          <div><Card slide ImgCard={elige1} TituloCard='¿QUÉ SON LOS VIAJES A LA MEDIDA?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='¿QUÉ PUEDO ESPERAR DE LOS CIRCUITOS?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='¿POR QUÉ VIAJAR EN UN CRUCERO?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='¿QUÉ SON LAS EXPEDICIONES?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='¿QUÉ PUEDO ESPERAR DE UN SAFARI?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='¿QUÉ ES ALAS SOBRE EL MUNDO?' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
  			</Slider>
  	   </DivTipoDeViaje>
  );
}

SeccionTipoDeViaje.propTypes = {

};

export default SeccionTipoDeViaje;
