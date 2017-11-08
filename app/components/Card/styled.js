import styled from 'styled-components';

import { ButtonBanner } from '../BannerPrincipal/styled'

const CuerpoCard = styled.div`
  width: 27%;
  background-color: #ffffff;
  position: relative;

    div{
       padding: 5%;
       padding-top: 10px;
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
  width: 18%;
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
    right: 4%;
    bottom: 36%;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    right: 5%;
    bottom: 34%;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    right: 5%;
    bottom: 30%;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    right: 5%;
    bottom: 28%;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    right: 5%;
    bottom: 28%;
  }

`;

const TituloCard = styled.h3`
  width: 80%;
  font-family: AvenirBook;
  color: #001a5a;

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
	padding: 3% 13% 3% 13%;
	position: relative;
	margin-top: -40px;
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