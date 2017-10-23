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
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: justify;
      justify-content: right;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 7%;
  width: 100%;
  color: white;
  background-color: #001a5a;
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
    color: #ffffff;
    background-color: #ee7202;
    border-color: #ee7202;
  }
  &:focus{
    color: #ffffff;
    background-color: #ee7202;
    border-color: #ee7202;
  }
`;

const Logo = styled(ButtonNavBar)`
  background-color: 'white';
  &:hover{
    background-color: white;
    border-color: white;
  }
  &:focus{
    background-color: white;
    border-color: white;
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
  height: ${props => props.logo ? '' : '27px;'}
  margin-right: 15px;  
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