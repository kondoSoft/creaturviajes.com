import styled from 'styled-components';

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
  padding: 0.5rem 1rem;
  width: 100%;
  color: white;
  background-color: #001a5a;
`
const ButtonNavBar = styled.button`

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
  font-size: 1rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  color: #fff;
  background-color: #001a5a;
  border-color: #001a5a;
  &:hover{
    color: #ffffff;
    background-color: #ee7202;
    border-color: #ee7202;
  }
`

const IconNavBar = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 7px;

`
export { NavbarBlue, ButtonNavBar, IconNavBar }