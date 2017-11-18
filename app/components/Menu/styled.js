import styled from 'styled-components';

const ContenedorMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  .oculta {
      display: none;
      -webkit-transition:height 1s linear;
      -moz-transition: height 1s linear;
      -ms-transition: height 1s linear;
      -o-transition: height 1s linear;
      transition: height 1s linear;

  }
  .oculta.open {
    display: inherit;
    -webkit-transition:height 1s linear;
    -moz-transition: height 1s linear;
    -ms-transition: height 1s linear;
    -o-transition: height 1s linear;
    transition: height 1s linear;

  }
`;

const NavbarBlue = styled.nav`
  position: relative;
  /* Safari 6.1+ */
  display: -webkit-flex;
   /* IE 10 */ 
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-flex-align: center;
         align-items: center;
  -webkit-flex-pack: justify;
  -webkit-flex-justify-content: flex-end;
               justify-content: flex-end;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  color: white;
  background-color: #001a5a;

  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    padding-right: 2%;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    padding-right: 4%;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    padding-right: 3.5%;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    padding-right: 7.5%;
  }
  @media screen and (min-width: 1921px) {
    padding-right: 7.5%; 
  }
`;

const NavbarWhite = styled.nav`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  color: white;
  background-color: #ffffff;

  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    padding-right: 2%;
    padding-left: 2%;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    padding-right: 4%;
    padding-left: 4%;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    padding-right: 3.5%;
    padding-left: 3.5%;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    padding-right: 7.5%;
    padding-left: 7.5%;
  }
  @media screen and (min-width: 1921px) {
    padding-right: 7.5%; 
    padding-left: 7.5%; 
  }
`;

const SeccionOculta = styled(NavbarWhite)`
    p{
      color: black;
    }
`;

const ButtonNavBar = styled.a`
  font-family: AvenirRoman;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  ${props => props.logo ? '' : 'cursor: pointer;'}
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: ${props => props.blue ? '1px solid transparent' : 'none'};
  padding: .5rem 1.5rem .5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  color: ${props => props.blue ? 'white' : 'black'};
  background-color: ${props => props.blue ? '#001a5a' : 'white'};
  border-color: #001a5a;
  display: ${props => props.displayNone ? 'none' : 'inherit'};


  &:hover{
    opacity: 0.5;
  }

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
    padding: 10px 15px 10px 15px;
    font-size: 15px;
    ${props => props.logo ? 'flex-grow: 1;' : '' }
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    padding: 10px 15px 10px 15px;
    font-size: 15px;
    ${props => props.logo ? 'flex-grow: 1;' : '' }
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    ${props => props.logo ? 'flex-grow: 1;' : '' }
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    ${props => props.logo ? 'flex-grow: 1;' : '' }
  }

  @media screen and (min-width: 1921px) {
    ${props => props.logo ? 'flex-grow: 1;' : '' }
  }
`;

const Logo = styled(ButtonNavBar)`
  &:hover{
    opacity: 1;
  }
`;

const ButtonNavBarWhite = styled(ButtonNavBar)`
    &:hover{
      text-decoration: underline;
      text-decoration-color: #ee7202;
      color: #ee7202;
      font-weight: bold;
      background-color: white;
    }
`;

const IconNavBar = styled.img`

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
    width: ${props => props.logo ? '220px' : '16px'};
    height: ${props => props.logo ? '50px' : '16px'};
    margin-right: 6px;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    width: ${props => props.logo ? '260px' : '20px'};
    height: ${props => props.logo ? '60px' : '20px'};
    margin-right: 8px;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    width: ${props => props.logo ? 'inherit' : '22px'};
    height: ${props => props.logo ? 'inherit' : '22px'};
    margin-right: 10px;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    width: ${props => props.logo ? 'inherit' : '22px'};
    height: ${props => props.logo ? 'inherit' : '22px'};
    margin-right: 10px;
  }

  /* xlarge */
  @media screen and (min-width: 1921px) {
    width: ${props => props.logo ? 'inherit' : '20px'};
    height: ${props => props.logo ? 'inherit' : '20px'};
    margin-right: 15px;
  }

`;

export { 
  ContenedorMenu,
  NavbarBlue, 
  NavbarWhite,
  SeccionOculta,
  ButtonNavBar,
  ButtonNavBarWhite,
  IconNavBar,
  Logo
}