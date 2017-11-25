import styled from 'styled-components';

const ContenedorMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  @keyframes cerrado{
    from{
      height: 140px;
    }
    to{
      height: 0px;
    }
  }
  @keyframes abierto{
    from{
      height: 0px;
    }
    to{
      height: 140px;
    }
  }
  
  .abierto{
    font-family: AvenirRoman;
    height: 140px;
    overflow: hidden;
    background-color: #ffffff;
    animation-name: abierto;
    animation-duration: .5s;
    border-bottom: 1px solid #ee7202;

    padding-right: 6.5%; 
    padding-left: 6.5%;
    
  }

  .cerrado{
    height: 0px;
    overflow: hidden;
    animation-name: cerrado;
    animation-duration: .5s;
    background-color: #ffffff;

    padding-right: 6.5%; 
    padding-left: 6.5%;
  }

  .cerrado-sin{
    height: 0px;
    overflow: hidden;
    background-color: #ffffff;

    padding-right: 6.5%; 
    padding-left: 6.5%;
  }

  #tipoCambio{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    width: 100%;
    height: 70%;
    background-color: white;
    padding-top: 2%;
    h4{
      color: #ee7202;
      width: 100%;
      margin: 0;
    }
    label{
      font-family: AvenirRoman;
      margin-right: 3%; 
    }
  }

  #puntoVenta{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    h4{
      padding-left: 15%;
    }
    p{
      padding-left: 15%;
      text-align: justify;
    }    
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
    @keyframes cerrado{
      from{
        height: 110px;
      }
      to{
        height: 0px;
      }
    }
    @keyframes abierto{
      from{
        height: 0px;
      }
      to{
        height: 110px;
      }
    }
    
    .abierto{
      height: 110px;
    }
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    @keyframes cerrado{
      from{
        height: 110px;
      }
      to{
        height: 0px;
      }
    }
    @keyframes abierto{
      from{
        height: 0px;
      }
      to{
        height: 110px;
      }
    }
    
    .abierto{
      height: 110px;
    }
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    @keyframes cerrado{
      from{
        height: 130px;
      }
      to{
        height: 0px;
      }
    }
    @keyframes abierto{
      from{
        height: 0px;
      }
      to{
        height: 130px;
      }
    }
    
    .abierto{
      height: 130px;
    }
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {

  }
  
`;

const SeccionOculta = styled.div`
  .slick-slider{
    height: 100%;
  }
  .slick-prev, .slick-next{
    top: 50%;
  }
  .slick-prev{
    left: -5%;
    z-index: 1;
  }
  .slick-next{
    right: -5%;
    z-index: 1;
  }

  .slick-arrow.slick-prev, .slick-arrow.slick-next{
    background-color: white;
    width: 30px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before, .slick-next:before{
    content: '';
  }

  .flechaIzquierda {
    height: 15px; 
    width: 15px;
    border: 1px solid black;
    border-width: 0 0 1px 1px;
    transform: rotate(45deg);
  }

  .flechaDerecha {
    height: 15px; 
    width: 15px;
    border: 1px solid black;
    border-width: 1px 1px 0 0;
    transform: rotate(45deg);
  }
`;

const PuntoVenta = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 0;
  font-family: AvenirRoman;
  border-right: .5px solid #ee7202;
  h4{
      color: #ee7202;
      width: 100%;
      margin-bottom: 1%;
  }
  p{
    font-family: AvenirRoman;
    padding: 0;
    margin: 0;
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
    h4{
      font-size: 14px;
    }
    p{
      font-size: 11px;
    }
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    h4{
      font-size: 14px;
    }
    p{
      font-size: 11px;
    }
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    h4{
      font-size: 16px;
    }
    p{
      font-size: 14px;
    }
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {

  }
`;

const Banderas = styled.img`
  width: 2.5%;
  margin-right: 1%;
  ${props => props.jpy ? 'border: 1px solid black;' : ''}
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
    width: ${props => props.logo ? '210px' : '16px'};
    height: ${props => props.logo ? '50px' : '16px'};
    margin-right: 6px;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    width: ${props => props.logo ? '250px' : '20px'};
    height: ${props => props.logo ? '60px' : '20px'};
    margin-right: 8px;
  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    width: ${props => props.logo ? '270px' : '22px'};
    height: ${props => props.logo ? '70px' : '22px'};
    margin-right: 10px;
  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    width: ${props => props.logo ? '270px' : '22px'};
    height: ${props => props.logo ? '70px' : '22px'};
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
  PuntoVenta,
  Banderas,
  ButtonNavBar,
  ButtonNavBarWhite,
  IconNavBar,
  Logo
}