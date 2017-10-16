import styled from 'styled-components';
const Navbar = styled.nav`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: justify;
      justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
  color: white;
  background-color: #001a5a;
`
const ButtonNavBar = styled.button`
//  font-family: AvenirRoman;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 1rem 2.5rem 1rem 2.5rem;
  font-size: 1.5rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  color: #fff;
  background-color: #ee7202;
  border-color: #ee7202;
  &:hover{
    color: #000000;
    background-color: #ffffff;
    border-color: #ffffff;
  }
`

export { Navbar, ButtonNavBar }