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
	ButtonCard } from './styled';

function Card(props) {
  return (
    <CuerpoCard>
      <ImagenCard src={props.ImgCard} alt=''/>
      <EspacioBoton>
      	<ButtonCard>{props.TextoBoton}</ButtonCard>
      </EspacioBoton>
      <div>
	      <TituloCard>{props.TituloCard}</TituloCard>
	      <TextoCard>{props.TextoCuerpo}</TextoCard>
      </div>
    </CuerpoCard>
  );
}

Card.propTypes = {

};

export default Card;
