import styled from 'styled-components';

import { ButtonBanner } from '../BannerPrincipal/styled'

const CuerpoCard = styled.div`
  width: 27%;
  background-color: #ffffff;

    div{
       padding: 5%;
       padding-top: 0px;
       padding-bottom: 0px;
       margin: 0;
       position: relative;
    }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    width: 453.75px;
  }
`;

const ImagenCard = styled.img`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const LogoPremium = styled.img`
  width: 14%;
  position: absolute;

    /* xsmall-0 */
  @media screen and (max-width: 480px) {

  }

  /* xsmall-1 */
  @media screen and (max-width: 600px) and (min-width: 481px) {

  }

  /* small-0 */
  @media screen and (max-width: 840px) and (min-width: 601px) {

  }

  /* small-1 */
  @media screen and (max-width: 960px) and (min-width: 841px) {

  }

  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    right: 7%;
    top: 0;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    right: 7%;
    top: 0;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    right: 7%;
    top: 0;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    right: 7%;
    top: 0;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    right: 7%;
    top: 0;
  }

`;

const TituloCard = styled.h3`
  font-family: AvenirBook;
  color: #001a5a;
  margin-top: 5%;
  margin-bottom: 3%;
  /* xsmall-0 */
  @media screen and (max-width: 480px) {

  }

  /* xsmall-1 */
  @media screen and (max-width: 600px) and (min-width: 481px) {

  }

  /* small-0 */
  @media screen and (max-width: 840px) and (min-width: 601px) {

  }

  /* small-1 */
  @media screen and (max-width: 960px) and (min-width: 841px) {

  }

  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    font-size: 19px;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    font-size: 20px;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    font-size: 24px;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    font-size: 29px;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    font-size: 30px;
  }
`;

const TextoCard = styled.p`
  color: #95a5a6;
  font-size: 20px;
  font-family: AvenirRoman;
  text-align: justify;
  margin-top: 3%;
`;

const EspacioBoton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonCard = styled(ButtonBanner)`
	padding: 3% 13% 3% 13%;
	position: relative;
	margin-top: -30px;
	left: auto;
	bottom: 50%;
  font-size: 1.5rem;
`;

const BotonCabecera = styled(ButtonBanner)`
  padding: 3% 13% 3% 13%;
  font-size: 1rem;
  bottom: auto;
  left: auto;
  top: 0px;
  right: 0px;
`;

const EspacioLink = styled(EspacioBoton)`
  justify-content: flex-end;
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