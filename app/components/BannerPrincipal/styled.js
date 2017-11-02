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

  @media (max-width: 575px) {

  }

  @media (max-width: 767px) {

  }

  @media (max-width: 991px) {
    left: 195px;
    bottom: 300px;
    font-size: 1rem;
    padding: .5rem 1.5rem .5rem 1.5rem;
  }

  @media (max-width: 1199px) {
    left: 25%;
    bottom: 20%;
    font-size: 1rem;
    padding: .5rem 1.5rem .5rem 1.5rem;
  }
  @media (min-width: 1200px) {
    left: 25%;
    bottom: 22%;
  }
`;

const TituloBanner = styled.p`
	font-family: AntroVectra;
	font-weight: bold;
	font-size: 4rem;
	color: #001a5a;
	position: absolute;
  left: 15%;
  bottom: 22%;

  @media (max-width: 575px) {

  }

  @media (max-width: 767px) {

  }

  @media (max-width: 991px) {
    left: 100px;
    bottom: 300px;
    font-size: 2.5rem;
  }

  @media (max-width: 1199px) {
    left: 9%;
    bottom: 18%;
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    left: 15%;
    bottom: 22%;
    font-size: 4rem;
  }
`;

export { 
  ImgPrincipal,
  TituloBanner, 
  ButtonBanner,
  ContenedorBanner
}