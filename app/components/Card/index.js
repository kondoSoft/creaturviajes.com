/**
*
* Card
*
*/

import React from 'react';
import { 
	CuerpoCard, 
	ImagenCard, 
  LogoPremium,
  TituloCard, 
  EspacioTexto, 
  TextoCard, 
	EspacioBoton, 
	ButtonCard,
  BotonCabecera,
  EspacioLink,
  LinkLeerMas
  } from './styled';
import PalomaDorada from '../../assets/ImagenesPruebaNuevoDiseniov2/paloma.svg';

function Card(props) {
  return (
    <CuerpoCard>
        {props.BotonCabecera ? <BotonCabecera>{props.TextoBotonCabecera}</BotonCabecera> : ''}
      <ImagenCard src={props.ImgCard} alt=''/>
      <EspacioBoton>
      	{props.BotonMedio ? <ButtonCard>{props.TextoBoton}</ButtonCard> : ''}
      </EspacioBoton>
      <div>
	      <TituloCard>{props.TituloCard}</TituloCard>
        {props.Premium ? <LogoPremium src={PalomaDorada} alt='Logo Premium'/> : ''}
	      <TextoCard>{props.TextoCuerpo}</TextoCard>
        <EspacioLink>
          {props.LinkLeerMas ? <LinkLeerMas>Leer más...</LinkLeerMas> : ''}
        </EspacioLink>
      </div>
    </CuerpoCard>
  );
}

Card.propTypes = {

};

export default Card;
