/**
*
* Card
*
*/

import React from 'react';
import { 
	CuerpoCard,
  CuerpoTextoCard, 
	ImagenCard, 
  LogoPremium,
  TituloCard, 
  EspacioTexto, 
  TextoCard, 
	EspacioBoton, 
	ButtonCard,
  BotonCabecera,
  EspacioLink,
  LinkLeerMas,
  LinkViajeLujo
  } from './styled';
import PalomaDorada from '../../assets/ImagenesPruebaNuevoDiseniov2/paloma.svg';

function Card(props) {
  return (
    <CuerpoCard>
        {props.BotonCabecera ? <BotonCabecera>{props.TextoBotonCabecera}</BotonCabecera> : ''}
      <ImagenCard src={props.ImgCard} alt=''/>
      	{props.BotonMedio ? <EspacioBoton><ButtonCard>{props.TextoBoton}</ButtonCard></EspacioBoton> : ''}
      <CuerpoTextoCard>
	      <TituloCard>{props.TituloCard}</TituloCard>
        {props.Premium ? <LogoPremium src={PalomaDorada} alt='Logo Premium'/> : ''}
	      <TextoCard>{props.TextoCuerpo}</TextoCard>
        {props.LinkLeerMas ? <EspacioLink><LinkLeerMas href='#'>Leer más...</LinkLeerMas></EspacioLink> : ''}
        {props.Premium ? <EspacioLink><LinkViajeLujo>Viajes de Lujo</LinkViajeLujo></EspacioLink> : ''}
      </CuerpoTextoCard>
    </CuerpoCard>
  );
}

Card.propTypes = {

};

export default Card;
