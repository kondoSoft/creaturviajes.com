import styled from 'styled-components';

import { ButtonBanner } from '../BannerPrincipal/styled'

const CuerpoCard = styled.div`
  width: ${props => props.slide ? '100%' : '27%'};
  ${props => props.slide ? 'margin-left: auto;' : ''}
  ${props => props.slide ? 'margin-right: auto;' : ''}
  ${props => props.slide ? 'padding-left: 8%;' : ''}
  ${props => props.slide ? 'padding-right: 8%;' : ''}
  background-color: #ffffff;
  position: relative;

  /* xlarge */
  @media screen and (min-width: 1921px) {
    width: 453.75px;
  }
`;

const CuerpoTextoCard = styled.div`
  padding: 5%;
  margin: 0;
  position: relative;
  display: flex;
  flex-flow: row wrap;
`;

const ImagenCard = styled.img`
  width: 100%;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

const LogoPremium = styled.img`
  width: 14%;
  height: 100%;
  margin-left: 3%;
  margin-top: 4%;
`;

const TituloCard = styled.h3`
  font-family: AvenirBook;
  color: #001a5a;
  margin-top: 5%;
  margin-bottom: 3%;
  cursor: pointer;
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
  font-family: AvenirRoman;
  text-align: justify;
  margin-top: 3%;

  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    font-size: 16px;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    font-size: 18px;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    font-size: 20px;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    font-size: 20px;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    font-size: 20px;
  }
`;

const EspacioBoton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonCard = styled(ButtonBanner)`
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
  padding-bottom: 3%;
`;

const LinkLeerMas = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  text-decoration-color: #ee7202;
  color: #ee7202;
  font-family: AvenirRoman;
`;

const LinkViajeLujo = styled(LinkLeerMas)`
  color: #dcaf1f;
  text-decoration: none;
`;

export {
  CuerpoCard,
  CuerpoTextoCard, 
  ImagenCard, 
  LogoPremium, 
  TituloCard,
  TextoCard, 
  EspacioBoton, 
  ButtonCard,
  BotonCabecera,
  EspacioLink,
  LinkLeerMas,
  LinkViajeLujo
}