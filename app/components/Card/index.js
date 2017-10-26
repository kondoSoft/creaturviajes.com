/**
*
* Card
*
*/

import React from 'react';
import { 
	CuerpoCard, 
	ImagenCard, 
	TituloCard, 
	EspacioTexto, 
	TextoCard, 
	EspacioBoton, 
	ButtonCard,
  BotonCabecera,
  EspacioLink,
  LinkLeerMas
  } from './styled';

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
