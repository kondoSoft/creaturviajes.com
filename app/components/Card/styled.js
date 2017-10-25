import styled from 'styled-components';

import { ButtonBanner } from '../BannerPrincipal/styled'

const CuerpoCard = styled.div`
  width: 23%;
  background-color: #ffffff;
  div{
	padding: 5%;
	padding-top: 10px;
  }
`;

const ImagenCard = styled.img`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const TituloCard = styled.h3`
  font-family: AvenirBook;
  color: #001a5a;
`;

const TextoCard = styled.p`
  color: #95a5a6;
  font-size: 18px;
  font-family: sans-serif;
  text-align: justify;
`;

const EspacioBoton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonCard = styled(ButtonBanner)`
	padding: 15px 50px 15px 50px;
	font-size: 1rem;
	position: relative;
	margin-top: -40px;
	left: auto;
	bottom: 50%;
`;


export {CuerpoCard, ImagenCard, TituloCard, TextoCard, EspacioBoton, ButtonCard}