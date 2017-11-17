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
	          <div><Card slide ImgCard={elige1} TituloCard='1' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='2' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='3' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='4' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='5' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='6' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='7' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='8' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='9' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='10' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='11' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='12' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='13' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='14' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='15' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige1} TituloCard='16' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige2} TituloCard='17' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='18' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='19' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
	          <div><Card slide ImgCard={elige3} TituloCard='20' TextoCuerpo='Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa. Descripción del programa.' LinkLeerMas /></div>
  			</Slider>
  	   </DivTipoDeViaje>
  );
}

SeccionTipoDeViaje.propTypes = {

};

export default SeccionTipoDeViaje;
