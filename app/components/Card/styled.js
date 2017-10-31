import styled from 'styled-components';

import { ButtonBanner } from '../BannerPrincipal/styled'

const CuerpoCard = styled.div`
  width: 440.45px;
  background-color: #ffffff;
  position: relative;
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

const LogoPremium = styled.img`
  width: 20%;
  position: absolute;
  right: 6%;
  bottom: 28%;
`;

const TituloCard = styled.h3`
  width: 75%;
  font-family: AvenirBook;
  color: #001a5a;
  font-size: 22px;
`;

const TextoCard = styled.p`
  color: #95a5a6;
  font-size: 18px;
  font-family: AvenirRoman;
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

const BotonCabecera = styled(ButtonBanner)`
  padding: 15px 50px 15px 50px;
  font-size: 1rem;
  bottom: auto;
  left: auto;
  top: 0px;
  right: 0px;

  @media (min-width: 1200px) {
    bottom: auto;
    left: auto;
    top: 0px;
    right: 0px;
  }

`;

const EspacioLink = styled(EspacioBoton)`
  justify-content: right;
`;

const LinkLeerMas = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  text-decoration-color: #ee7202;
  color: #ee7202;
  font-family: AvenirRoman;
`;

export {
  CuerpoCard, 
  ImagenCard, 
  LogoPremium, 
  TituloCard,
  TextoCard, 
  EspacioBoton, 
  ButtonCard,
  BotonCabecera,
  EspacioLink,
  LinkLeerMas
}