import styled from 'styled-components';

const ContenedorBanner = styled.div`
  width: 100%;
  position: relative;
`;

const ImgPrincipal = styled.img`
	width: 100%;
	margin: 0px;
	padding: 0px;
`;

const ButtonBanner = styled.button`
  font-family: AvenirRoman;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  color: #fff;
  background: #ee7202;
  border-color: #ee7202;
  position: absolute;
  left: 23%;
  bottom: 20%;

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
    padding: 1rem 2rem 1rem 2rem;
    font-size: .8rem;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1rem;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.3rem;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.5rem;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.5rem;
  }

`;

const TituloBanner = styled.p`
	font-family: AntroVectra;
	font-weight: bold;
	color: #001a5a;
	position: absolute;
  left: 13%;
  bottom: 22%;

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
    font-size: 2.5rem;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    font-size: 3rem;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    font-size: 3.5rem;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    font-size: 4rem;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    font-size: 4rem;
  }
`;

export { 
  ImgPrincipal,
  TituloBanner, 
  ButtonBanner,
  ContenedorBanner
}