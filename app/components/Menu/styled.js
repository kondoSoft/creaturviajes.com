import styled from 'styled-components';

const ContenedorMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
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
  padding-right: 7%;
  width: 100%;
  color: white;
  background-color: #001a5a;

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
    padding-right: 2%;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {

  }

  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {

  }

  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {

  }

  /* xlarge */
  @media screen and (min-width: 1921px) {

  }
  
`;

const NavbarWhite = styled.nav`
  position: relative;
  display: -ms-flexbox;
  display: flex;
    -ms-flex-wrap: center;
        flex-wrap: center;
   -ms-flex-align: center;
      align-items: center;
    -ms-flex-pack: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;  
  width: 100%;
  color: white;
  background-color: #ffffff;
`;

const ButtonNavBar = styled.a`
  font-family: AvenirRoman;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
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
  margin-right: ${props => props.logo ? '7%' : ''};
  border-color: #001a5a;
  display: ${props => props.displayNone ? 'none' : 'inherit'};
  &:hover{
    opacity: 0.5;
  }


  @media (max-width: 575px) {

  }

  @media (max-width: 767px) {

  }

  @media (max-width: 991px) {
    padding: 5px 12px 5px 12px;
    font-size: 14px;
    margin-right: ${props => props.logo ? '0px' : ''};


  }

  @media (max-width: 1199px) {
  padding: 5px 12px 5px 12px;
  font-size: 14px;
  margin-right: ${props => props.logo ? '3%' : ''}; 
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
  width: ${props => props.logo ? '254px' : '27px'};
  height: ${props => props.logo ? '80px' : '27px;'};
  margin-right: 15px;  


  @media (max-width: 575px) {

  }

  @media (max-width: 767px) {

  }

  @media (max-width: 991px) {
    width: ${props => props.logo ? '127px' : '14px'};
    height: ${props => props.logo ? '50px' : '14px;'}
    margin-right: 15px;  
  }

  @media (max-width: 1199px) {
      width: ${props => props.logo ? '180px' : '14px'};
      height: ${props => props.logo ? '60px' : '14px;'}
      margin-right: 15px;      
  }
`;

export { 
  ContenedorMenu,
  NavbarBlue, 
  NavbarWhite, 
  ButtonNavBar,
  ButtonNavBarWhite,
  IconNavBar,
  Logo
}