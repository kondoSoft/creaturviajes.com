import styled from 'styled-components';

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
  background: #ee7202;
  border-color: #ee7202;
  position: absolute;
  left: 22%;
  bottom: 25%;
`;

const TituloBanner = styled.p`
	font-family: AntroVectra;
	font-weight: bold;
	font-size: 4rem;
	color: #001a5a;
	position: absolute;
	left: 12%;
	bottom: 25%;

`;

export { ImgPrincipal, TituloBanner, ButtonBanner }